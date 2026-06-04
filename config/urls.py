from django.contrib import admin
from django.urls import path

from pages.views import home, section_page


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home, name="home"),
    path("funciones/", section_page, {"slug": "features"}, name="features"),
    path(
        "funciones/finanzas-contabilidad/",
        section_page,
        {"slug": "finance_accounting", "nav_slug": "features"},
        name="finance_accounting",
    ),
    path("para-quien/", section_page, {"slug": "segments"}, name="segments"),
    path("recursos/", section_page, {"slug": "resources"}, name="resources"),
    path("precio/", section_page, {"slug": "pricing"}, name="pricing"),
    path("soporte/", section_page, {"slug": "support"}, name="support"),
    # Rutas legadas para no romper accesos previos.
    path("apps/", section_page, {"slug": "features"}, name="legacy_apps"),
    path("plataforma/", section_page, {"slug": "features"}, name="legacy_platform"),
    path("facturacion/", section_page, {"slug": "features"}, name="legacy_billing"),
    path("clientes/", section_page, {"slug": "segments"}, name="legacy_clients"),
]
