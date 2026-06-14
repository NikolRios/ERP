# Familias de contenido → diseño

El proyecto Majjun tiene ~18 secciones que se agrupan en familias según su estructura
de datos en `data.py`. La familia determina qué patrones de diseño aplicar. **Clasifica
mirando las claves del contenido**, no el nombre del slug.

## Cómo clasificar
Lee el bloque del slug en `data.py` y busca la clave dominante:

| Clave dominante en data.py | Familia | Tratamiento de diseño |
|---|---|---|
| `sections[]` (con short_title, title, points) | **A — Guía por pasos** | Diseño de inventarios |
| `items[]` (con features, audience) + `impact_metrics` | **D — Landing de producto** | Home de Freshworks |
| `items[]` (catálogo simple, filtrable) | **B — Catálogo de tarjetas** | Grid + filtros |
| `testimonials[]` | **E — Confianza** | Carrusel de testimonios |
| `pillars[]` | **E — Soporte** | Grid de pilares |
| `resource_groups[]` | **F — Recursos** | Grid tipo biblioteca |
| `tabs` / `plan` / `billing_periods` | **C — Pricing** | Tabla comparativa + toggle |

## Familia A — Guía por pasos  (la más común: ~10 secciones)
Slugs: finance_accounting, banks_finance, accounts_receivable, cfdi_guide, ai_guide,
sales_customers, retainer_contracts, accounts_payable, purchases_suppliers,
logistics_warehouses, e inventarios (piloto ya hecho).

Estructura: `eyebrow`, `title`, `description`, `sections[]`. Algunas traen `flow`.

Patrones a aplicar (los de inventarios.html):
- Hero centrado (eyebrow + title + 2 CTAs)
- Anchor nav sticky con scroll-spy (porque es una página larga de varias secciones)
- Pasos numerados / contenido de cada `section`
- Banda de métricas (si la sección define métricas)
- Tabs de casos de uso intercambiables (si hay 2-3 sub-flujos)
- Grid de capabilities
- FAQ acordeón (si hay faq[])
- CTA tripartito final

Variación `flow`: las secciones con `flow` tienen una secuencia de proceso. Mostrarla
como tira de pasos horizontales o mini-diagrama de flujo, además del resto.

## Familia D — Landing de producto / hub
Ej: features (página /operacion/), platform, billing.
Estructura: `eyebrow`, `title`, `trust_text`, `trust_logos[]`, `items[]` (con features,
audience), `ai_title`, `ai_points[]`, `impact_metrics[]`, `final_ctas[]`.

Patrones (home de Freshworks):
- Hero + 2 CTAs. **SIN anchor nav, SIN pasos, SIN FAQ** (no es una guía).
- Trust bar: trust_text + trust_logos como pills de industria.
- Grid de 3 tarjetas (items). Si la página es un HUB de subsecciones, las tarjetas
  deben enlazar a los módulos reales (ver nota hub abajo).
- Bloque de IA destacado (ai_title + ai_points), estilo "Freddy AI".
- Banda de métricas de impacto con CONTEO ANIMADO (impact_metrics traen count+suffix;
  valores no numéricos como "24/7" se muestran estáticos).
- CTA tripartito final (final_ctas).

Nota HUB: si la ruta es la página índice de una sección con subsecciones (mirar el
`dropdown` del slug en data.py), las 3 tarjetas centrales deberían presentar y enlazar
a esas subsecciones reales, no a contenido genérico. Confirmar con el usuario en el plan.

## Familia B — Catálogo de tarjetas
Ej: apps, segments. Estructura con `items[]` + a veces `initial`, categorías.
Patrones: hero breve + grid de tarjetas filtrable por categoría (chips de filtro
arriba). Diseño ligero, sin métricas ni FAQ salvo que el contenido lo tenga.

## Familia C — Pricing
Slug: pricing. Estructura: `billing_periods`, `tabs`, `plan`.
Patrones: hero + toggle mensual/anual + tabla comparativa de planes (tarjetas de plan
con features). Resaltar el plan recomendado. CTA por plan.

## Familia E — Confianza / Soporte
- clients: `testimonials[]` (quote, author) → carrusel/slider de testimonios + logos.
- support: `pillars[]` → grid de pilares de soporte con icono + título + descripción.
Diseño ligero, una o dos secciones, CTA final.

## Familia F — Recursos
Slug: resources. Estructura: `resource_groups[]`.
Patrones: hero + grid de recursos agrupados por categoría (tipo biblioteca/blog),
cada recurso con etiqueta de tipo (Guía/Reporte/Whitepaper), título, descripción.
