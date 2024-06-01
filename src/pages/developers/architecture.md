# Software Components

OHMG is built with [Django](https://www.djangoproject.com/), with a frontend mostly made from [Svelte](https://svelte.dev) components. [OpenLayers](https://openlayers.org) is the JavaScript library for all map interfaces, and the basemaps come from [OpenStreetMap](https://openstreetmap.org) and [Mapbox](https://mapbox.com).

## Third-party Django Apps

- [Django Ninja](https://django-ninja.rest-framework.com) - API
- [Django Newsletter](https://github.com/jazzband/django-newsletter) - Newsletter (optional feature)

## External Dependencies

- Postgres + [PostGIS](https://postgis.net/)
- Celery + RabbitMQ
- GDAL >= 3.5
- [TiTiler](https://developmentseed.org/titiler)
- NodeJS / npm
