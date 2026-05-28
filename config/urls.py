from django.contrib import admin
from django.urls import path

from pages.views import home, section_page


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home, name="home"),
    path("apps/", section_page, {"slug": "apps"}, name="apps"),
    path("plataforma/", section_page, {"slug": "platform"}, name="platform"),
    path("facturacion/", section_page, {"slug": "billing"}, name="billing"),
    path("precio/", section_page, {"slug": "pricing"}, name="pricing"),
    path("clientes/", section_page, {"slug": "clients"}, name="clients"),
]
