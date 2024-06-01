# Getting Started

OHMG is open source software that can be self-hosted for your own georeferencing projects. This page has an overview of the platform architecture, as well as the working installation guide. *This is still a work-in-progress!* You can follow development at [github.com/ohmg-dev/OldInsuranceMaps](https://github.com/ohmg-dev/OldInsuranceMaps).

:::info Looking for old maps?

If you are looking for information about georeferencing Sanborn maps with OldInsuranceMaps.net, see [docs.oldinsurancemaps.net](https://docs.oldinsurancemaps.net).
:::

:::caution Under development...

Please understand this software is in a pre-beta mode, so both the installation process and the platform itself still have rough edges! 
:::

## Software Details

OHMG is built with [Django](https://www.djangoproject.com/), with a frontend mostly made from [Svelte](https://svelte.dev) components. [OpenLayers](https://openlayers.org) is the JavaScript library for all map interfaces, and the basemaps come from [OpenStreetMap](https://openstreetmap.org) and [Mapbox](https://mapbox.com).

### Third-party Django Apps

- [Django Ninja](https://django-ninja.rest-framework.com) - API
- [Django Newsletter](https://github.com/jazzband/django-newsletter) - Newsletter (optional feature)

### External Dependencies

- Postgres + [PostGIS](https://postgis.net/)
- Celery + RabbitMQ
- GDAL >= 3.5
- [TiTiler](https://developmentseed.org/titiler)
- NodeJS / npm

## Development Installation

Running the application requires a number of components to be installed and configured properly. This aspect of the application is not optimized, but slowly getting better.

### System Requirements (Ubuntu 24.04)

```
sudo apt update && sudo apt upgrade -y
sudo apt install python3.12-venv libpq-dev gdal-bin libgdal-dev python3-dev build-essential -y
```

GDAL version must be >= 3.8

```
gdalinfo --version
```

[Installation instructions for Node.js](https://linuxconfig.org/how-to-install-node-js-on-ubuntu-24-04).

#### Postgres/PostGIS Install

There are plenty of ways to install Postgres/PostGIS, including using hosted services like AWS RDS. The following steps illustrate how a local install on Ubuntu 24.04 can be carried out.

```
sudo apt install ca-certificates gnupg

curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/apt.postgresql.org.gpg >/dev/null
sudo sh -c 'echo "deb [arch=amd64] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

sudo systemctl daemon-reload
sudo apt update && sudo apt upgrade -y

sudo apt install postgresql-15-postgis-3
```

Edit `/etc/postgresql/15/main/pg_hba.conf`.

1. set user `postgres` to `trust`
2. set all local users to `md5`

```
sudo service postgresql restart
```

### Create database

With Postgres/PostGIS running, create a database like this

```bash
psql -U postgres -c "CREATE USER ohmg WITH ENCRYPTED PASSWORD '<your password>'"
psql -U postgres -c "CREATE DATABASE oldinsurancemaps WITH OWNER ohmg;"
psql -U postgres -d oldinsurancemaps -c "CREATE EXTENSION PostGIS;"
```

Or use the included shell script:

```bash
export DB_PASSWORD=your_password
source ./scripts/create_database.sh
```

### Install Django project

Make virtual env

```bash
python3 -m venv env
source env/bin/activate
```

Install Python deps

```bash
git clone https://github.com/ohmg-dev/OldInsuranceMaps && cd OldInsuranceMaps
pip install -r requirements.txt
```

Set environment variables

```bash
cp .env.original .env
```

:::caution

Some variables in `.env.original` may no longer be used&mdash;this side of the installation process needs more attention. Make sure to read through the rest of this document before delving into `.env`.
:::

Initialize database, create admin user

```bash
python manage.py migrate
python manage.py createsuperuser
```

Load all the `Place` objects to create geography scaffolding

```bash
python manage.py place import-all
```

### Build frontend

The frontend uses a suite of independently built svelte components.

```bash
cd ohmg/frontend/svelte
pnpm install
pnpm run dev
```

### Run Django dev server

You can now run

```bash
python manage.py runserver
```

and view the site at `http://localhost:8000`.

---

However, a few more components will need to be set up independently for the app to be fully functional. Complete the following sections and then restart the dev server so that new `.env` content will be used.

### RabbitMQ + Celery

In development, RabbitMQ can be run via Docker like so:

```bash
docker run --name rabbitmq --hostname my-rabbit \
  -p 5672:5672 \
  -p 15672:15672 \
  -e RABBITMQ_DEFAULT_USER=username \
  -e RABBITMQ_DEFAULT_PASS=password \
  --rm \
  rabbitmq:3-alpine
```

For convenience, this command is in the following script:

```bash
source ./scripts/rabbit_dev.sh
```

Once RabbitMQ is running, update `.env` with the `RABBITMQ_DEFAULT_USER` and `RABBITMQ_DEFAULT_PASS` credentials you used above when creating the container.

Now you are ready to run Celery in development with:

```bash
source ./scripts/celery_dev.sh
```

### TiTiler

TiTiler can also be run via Docker, using a slightly modified version of the official container (it is only modified to include the WMS endpoint extension):

```bash
docker run --name titiler \
  -p 8008:8000 \
  -e PORT=8000 \
  -e MOSAIC_SCRIPT_ZOOM=False \
  -e WORKERS_PER_CORE=1 \
  --rm \
  -it \
  ghcr.io/mradamcox/titiler:0.11.6-ohmg
```

Or the same command is wrapped in:

```bash
source ./scripts/titiler_dev.sh
```

This will start a container running TiTiler and expose it to `localhost:8008`.

Make sure you have `TITILER_HOST=http://localhost:8008` in `.env`.

### Static file server

One hitch during development is that neither the Django dev server nor Python's http.server server range requests (more on this [here](https://code.djangoproject.com/ticket/22479) and [here](https://github.com/python/cpython/issues/86809)), but TiTiler works by requesting specific ranges of COG files. The easiest workaround is to use node's [http-server](https://www.npmjs.com/package/http-server).

From within the repository root (alongside the `uploaded` directory) run:

```
npx http-server .
```

All COGs will now be accessible at `http://localhost:8080/uploaded/`.

---

Make sure you have `MEDIA_HOST=http://localhost:8080` in `.env`. `MEDIA_HOST` is a prefix that will be prepended to any uploaded media paths that are passed to TiTiler.

In production, you will already be using a webserver for static files so you will not need to use `http-server`. In this case, remove `MEDIA_HOST` from `.env` or set it to `''`.
