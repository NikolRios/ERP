---
name: majjun-redesign
description: >
  Rediseña las páginas de sección del ERP Django "Majjun" aplicando el sistema de
  diseño basado en los patrones UI/UX de Freshworks. Úsala SIEMPRE que el usuario
  pida rediseñar, mejorar el diseño, "darle estilo", "ponerle el diseño nuevo" o
  trabajar el front de cualquier ruta/sección/template del proyecto (ej.
  "/operacion/", "rediseña ventas y clientes", "el template de pricing", "esta
  sección"), incluso si no menciona la palabra "diseño" explícitamente. El proyecto
  tiene una arquitectura concreta (data.py + section_page.html + SECTION_TEMPLATES +
  estáticos por slug) y un piloto ya terminado (inventarios). Esta skill clasifica el
  contenido de la ruta, elige los patrones de diseño correctos para esa familia,
  presenta un PLAN y espera aprobación del usuario antes de implementar.
---

# Majjun — Rediseño de secciones por contenido

Esta skill encapsula el método para rediseñar las secciones del ERP Majjun (Django)
aplicando los patrones de diseño de Freshworks. La regla rectora es:

> **El diseño se adapta al CONTENIDO de cada template, no al revés.**
> Cada sección tiene datos distintos en `data.py`; el layout sale de esos datos.

## Flujo de trabajo (SIEMPRE en este orden)

Esta skill opera con control del usuario: clasifica y propone, pero **no implementa
hasta recibir un OK explícito**.

### Paso 0 — Identificar la ruta y leer el contenido
1. Resolver qué slug corresponde a la ruta pedida mirando `config/urls.py`.
2. Leer el bloque de ese slug en `pages/data.py` para ver su estructura REAL de datos.
3. Leer `pages/templates/pages/section_page.html` (el shell) para recordar cómo se
   cargan template y estáticos por slug.
4. Si es la primera vez que se usa la skill en la sesión, leer también el piloto ya
   terminado: `pages/templates/pages/sections/inventarios.html` + sus estáticos
   `pages/static/pages/css/inventarios.css` y `js/inventarios.js`. Es la
   implementación de referencia de la calidad esperada.

### Paso 1 — Clasificar la familia de contenido
Mirar qué claves tiene el contenido en `data.py` y clasificar según
`references/content-families.md`. La familia determina los patrones de diseño.

Resumen rápido (detalle completo en el reference):
- `sections[]` (short_title, title, points...) → **Familia A: Guía por pasos**
  (mismo diseño que inventarios: anchor nav, pasos, métricas, tabs, FAQ).
- `items[]` con features/audience → **Familia B/D: Landing o catálogo** (hero,
  trust bar, tarjetas, métricas, CTA — sin anchor nav ni pasos).
- `testimonials[]` o `pillars[]` → **Familia E: Confianza/Soporte** (carrusel o grid).
- `resource_groups[]` → **Familia F: Recursos** (grid tipo biblioteca).
- `tabs`/`plan`/`billing_periods` → **Familia C: Pricing** (tabla + toggle).

Si una sección mezcla estructuras (ej. tiene `items[]` Y `flow`), combinar patrones:
usar el principal por la clave dominante y añadir el secundario donde aplique.

### Paso 2 — Presentar el PLAN y ESPERAR OK  ⚠️ obligatorio
Mostrar al usuario un plan corto y claro con:
- Ruta + slug + familia detectada.
- Qué patrones de diseño se aplicarán y cuáles se OMITEN (y por qué — ej. "no lleva
  anchor nav porque no es una guía larga").
- Qué cambios en `data.py` (si hace falta enriquecer o reestructurar contenido).
- Qué archivos se crearán/tocarán (template, css, js, section_page.html, urls.py).
- El acento de color de la familia (ver `references/design-rules.md`).
Terminar con: **"¿Apruebas este plan? Implemento en cuanto confirmes."**
NO implementar nada hasta el OK.

### Paso 3 — Implementar (sólo tras OK)
Seguir `references/django-architecture.md` para la mecánica exacta (dónde va cada
archivo, cómo se registra el slug, cómo se cargan estáticos condicionalmente) y
`references/design-rules.md` para la calidad (tamaños, sticky, color, animaciones,
responsive). Aplicar los patrones de `references/freshworks-patterns.md`.

### Paso 4 — Verificar
- Abrir la ruta en runserver y confirmar que el contenido real se renderiza.
- Comprobar: sticky correcto (si aplica), animaciones, responsive móvil/tablet/desktop.
- Confirmar que NO se rompió inventarios ni otras secciones, ni navbar/footer.
- `collectstatic` sin errores.

## Reglas inquebrantables
- **No inventar contenido.** Usar los textos reales de `data.py`. Si se deriva una
  frase (ej. descripción de tarjeta), debe ser fiel al contenido existente y
  mostrarse al usuario en el plan para aprobación.
- **No tocar** el navbar (`partials/nav.html`), el footer del shell, ni el piloto
  inventarios, ni otras secciones fuera de la pedida.
- **Namespace del CSS**: todo bajo una clase contenedora por familia (ej.
  `.guide-page`, `.features-page`) para no pisar `styles.css` global ni otras secciones.
- **Color**: usar el azul de marca `--green: #2563eb` del proyecto como base. Cada
  familia puede variar su acento mediante UNA variable CSS (ver design-rules).
- **Django**: `{% load static %}` + `{% static %}` siempre. Respetar herencia de
  plantillas y los `{% for %}` / `{{ variables }}`.
- **Control del usuario**: el Paso 2 (plan + OK) nunca se salta.

## Referencias (leer según se necesite)
- `references/content-families.md` — cómo clasificar cada sección y qué patrones le tocan.
- `references/freshworks-patterns.md` — los patrones UI/UX de Freshworks (catálogo).
- `references/django-architecture.md` — mecánica exacta del proyecto Majjun.
- `references/design-rules.md` — reglas de calidad: tamaños, sticky, color, animación, responsive.
