from django.contrib import admin
from django.urls import path

from pages.views import home, section_page


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home, name="home"),
    path("operacion/", section_page, {"slug": "features", "nav_slug": "operacion"}, name="operation"),
    path(
        "operacion/inventarios/",
        section_page,
        {"slug": "inventarios", "nav_slug": "operacion"},
        name="inventories",
    ),
    path(
        "operacion/compras-y-proveedores/",
        section_page,
        {"slug": "purchases_suppliers", "nav_slug": "operacion"},
        name="purchases_suppliers",
    ),
    path(
        "operacion/logistica-y-almacenes/",
        section_page,
        {"slug": "logistics_warehouses", "nav_slug": "operacion"},
        name="logistics_warehouses",
    ),
    path("comercial/", section_page, {"slug": "segments", "nav_slug": "comercial"}, name="commercial"),
    path(
        "comercial/ventas-y-clientes/",
        section_page,
        {"slug": "sales_customers", "nav_slug": "comercial"},
        name="sales_customers",
    ),
    path(
        "comercial/contratos-de-retainer/",
        section_page,
        {"slug": "retainer_contracts", "nav_slug": "comercial"},
        name="retainer_contracts",
    ),
    path(
        "finanzas/",
        section_page,
        {"slug": "finance_accounting", "nav_slug": "finanzas"},
        name="finance",
    ),
    path(
        "finanzas/cuentas-por-pagar/",
        section_page,
        {"slug": "accounts_payable", "nav_slug": "finanzas"},
        name="accounts_payable",
    ),
    path(
        "finanzas/cuentas-por-cobrar/",
        section_page,
        {"slug": "accounts_receivable", "nav_slug": "finanzas"},
        name="accounts_receivable",
    ),
    path(
        "finanzas/bancos/",
        section_page,
        {"slug": "banks_finance", "nav_slug": "finanzas"},
        name="banks",
    ),
    path(
        "finanzas/cfdi-4-0-en-majjun-erp/",
        section_page,
        {"slug": "cfdi_guide", "nav_slug": "finanzas"},
        name="cfdi_4",
    ),
    path(
        "automatizacion/",
        section_page,
        {"slug": "features", "nav_slug": "automatizacion"},
        name="automation",
    ),
    path(
        "automatizacion/ia-en-majjun-erp/",
        section_page,
        {"slug": "ai_guide", "nav_slug": "automatizacion"},
        name="majjun_ai",
    ),
    path("funciones/", section_page, {"slug": "features", "nav_slug": "operacion"}, name="features"),
    path(
        "funciones/finanzas-contabilidad/",
        section_page,
        {"slug": "finance_accounting", "nav_slug": "finanzas"},
        name="finance_accounting",
    ),
    path("para-quien/", section_page, {"slug": "segments", "nav_slug": "comercial"}, name="segments"),
    path("recursos/", section_page, {"slug": "resources", "nav_slug": "operacion"}, name="resources"),
    path("precio/", section_page, {"slug": "pricing", "nav_slug": "finanzas"}, name="pricing"),
    path("soporte/", section_page, {"slug": "support", "nav_slug": "automatizacion"}, name="support"),
    # Rutas legadas para no romper accesos previos.
    path("apps/", section_page, {"slug": "features", "nav_slug": "operacion"}, name="legacy_apps"),
    path("plataforma/", section_page, {"slug": "features", "nav_slug": "operacion"}, name="legacy_platform"),
    path("facturacion/", section_page, {"slug": "features", "nav_slug": "finanzas"}, name="legacy_billing"),
    path("clientes/", section_page, {"slug": "segments", "nav_slug": "comercial"}, name="legacy_clients"),
]
