# Arquitectura del proyecto Majjun (Django)

Mecánica exacta para implementar un rediseño sin romper nada. Verifica siempre contra
el código real (puede haber cambiado); esto es el mapa.

## Estructura relevante
```
ERP/
├── config/
│   └── urls.py                 # rutas → slug + nav_slug
├── pages/
│   ├── data.py                 # PAGE_CONTENT, SECTION_TEMPLATES, NAV_ITEMS
│   ├── views.py                # section_page() renderiza el slug
│   ├── templates/pages/
│   │   ├── section_page.html   # SHELL: navbar + {% include section_template %} + footer
│   │   ├── partials/nav.html   # navbar real (NO TOCAR)
│   │   └── sections/
│   │       ├── inventarios.html  # PILOTO terminado (referencia de calidad)
│   │       └── <otros>.html
│   └── static/pages/
│       ├── css/
│       │   ├── styles.css        # globales: --green #2563eb, --green-dark, --blue, dark mode
│       │   └── inventarios.css   # CSS del piloto (namespaceado .inv-page)
│       └── js/
│           └── inventarios.js    # JS del piloto
```

## Cómo se sirve una sección
- `config/urls.py`: cada ruta llama a `section_page` con `{"slug": "...",
  "nav_slug": "..."}` y un `name`. Ej:
  `path("operacion/", section_page, {"slug": "features", "nav_slug": "operacion"}, name="operation")`
- `pages/data.py`:
  - `PAGE_CONTENT[slug]` = diccionario con el contenido de la sección.
  - `SECTION_TEMPLATES[slug]` = ruta del template de sección a incluir.
  - `NAV_ITEMS` = navegación (dropdowns con subsecciones por slug).
- `section_page.html` (shell): incluye `nav.html`, luego
  `{% include section_template %}`, luego el footer. Carga CSS/JS condicionalmente
  según el nombre del `section_template`.

## Pasos de implementación de un rediseño

### 1. Registrar template (si el slug aún no tiene el suyo)
En `data.py`, `SECTION_TEMPLATES`:
```python
SECTION_TEMPLATES["<slug>"] = "pages/sections/<slug>.html"
```

### 2. Enriquecer/ajustar contenido (sólo si el plan lo requiere)
Editar `PAGE_CONTENT[<slug>]` en `data.py`. Reglas:
- No inventar datos. Derivar fielmente del contenido existente.
- Añadir sólo campos que el nuevo diseño necesite (ej. `route`, `tip`, `metrics`,
  `faq`), mostrados al usuario en el plan.
- No romper otras secciones que compartan estructura.

### 3. Crear el template de sección (sólo el cuerpo)
`pages/templates/pages/sections/<slug>.html`:
- Empieza con `{% load static %}`.
- SÓLO el cuerpo: NO incluir navbar ni footer (los pone el shell).
- Alimentar con los datos vía `{% for %}` y `{{ }}` sobre el contenido del slug.
- Envolver todo en un contenedor con clase de familia (ej. `<div class="guide-page">`).
- Iconos SVG de línea inline (heredan currentColor), nunca emojis.

### 4. Crear estáticos namespaceados
- `pages/static/pages/css/<slug>.css` → todo bajo `.<familia>-page { ... }`.
  Reusar variables/tokens del sistema; definir el acento de familia como variable.
- `pages/static/pages/js/<slug>.js` → comportamientos (acordeón, tabs, scroll-spy,
  conteo de métricas, reveals). Independiente de otras secciones.

### 5. Carga condicional de estáticos en el shell
En `section_page.html`, añadir bloques tipo:
```django
{% if section_template == "pages/sections/<slug>.html" %}
  <link rel="stylesheet" href="{% static 'pages/css/<slug>.css' %}">
{% endif %}
```
y el `<script>` correspondiente antes de `</body>`. No cargar los estáticos de una
sección en otra.

### 6. Ruta (si cambia el slug de una URL existente)
En `config/urls.py`, ajustar el `slug` de la ruta correspondiente, conservando
`nav_slug` y `name`.

## Detalles que rompen cosas (vigilar)
- `.section-page` (o el wrapper del shell) puede tener `overflow:hidden`, lo que ROMPE
  `position:sticky`. Si la sección usa anchor nav sticky, neutralizar el overflow SÓLO
  en esa página vía JS (`document.querySelector('.section-page').style.overflow =
  'visible'`), nunca tocando el CSS compartido.
- El navbar real (`.site-header`) es sticky top:0, ~60px. Cualquier barra sticky de la
  sección va con `top: 60px` (altura real del navbar) para no solaparse.
- `styles.css` define `--green: #2563eb` (es el azul de marca, aunque se llame green).
  Reusarlo; no introducir azules nuevos sin querer.
- Hay dark mode global: usar variables, no colores hardcodeados que se rompan en oscuro.
