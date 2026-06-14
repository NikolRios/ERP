# Reglas de calidad de diseño (aprendidas del piloto inventarios)

Estas reglas resuelven los problemas concretos que aparecieron al implementar el
piloto. Aplicarlas desde el inicio en cada sección evita repetir el ciclo de arreglos.

## Tamaños y escala
- `font-size` base del contenedor de familia: **18px** (no heredar uno menor del global).
- Cuerpo/párrafos: ~18px, line-height 1.65.
- Jerarquía con `clamp()` MODERADO para que no se desborde en monitores grandes (los
  `vw` crecen mucho en pantallas anchas):
  - H1 hero: `clamp(32px, 4.5vw, 52px)`
  - H2 sección: `clamp(26px, 2.8vw, 36px)`  ← no más grande, evita títulos dominantes
  - Subtítulos: 17-18px
- Componentes internos no deben quedar diminutos frente al cuerpo: pasos (título 16px,
  desc 15px), tarjetas (título 16px, texto 14-15px), acordeón (título 17px, cuerpo 15px),
  callouts 15px.
- Banda de métricas: los números NO deben superar a los H2. Escala `clamp(22px, 2.4vw, 30px)`.
- Iconos SVG ~24px, círculos de paso proporcionados al texto.
- **Calibrar en pantalla estándar (~1440px), no sólo en monitores enormes**, que
  distorsionan la percepción de tamaño. Dejar el `font-size` base como una sola
  variable para poder subir/bajar toda la escala con un número.

## Contenedor / ancho
- Wrapper central con `max-width: ~1200px`, `margin: 0 auto`, padding lateral
  `clamp(20px, 4vw, 48px)`. Aplicarlo a TODAS las secciones para que el contenido se
  alinee con el navbar y no se disperse a todo lo ancho (causa de "se ve pequeño").
- En móvil el contenido usa el ancho disponible menos el padding.

## Barra sticky (anchor nav) — sólo familias que la usen
- Fondo **sólido opaco** (#fff o variable de blanco), NUNCA translúcido (si no, se ve
  el texto por detrás).
- Sombra sutil o borde inferior 1px para separarla del navbar y del contenido.
- `position: sticky; top: 60px` (altura real del navbar). z-index menor que el navbar,
  mayor que el contenido.
- Neutralizar `overflow:hidden` de `.section-page` vía JS sólo en esa página (rompe el
  sticky). Ver django-architecture.md.
- `scroll-margin-top` en las secciones ancladas (= altura navbar + barra, ~115px) para
  que al saltar con los links el título no quede tapado.
- Scroll-spy con offset dinámico (medir alturas reales de navbar + barra).

## Color (orgánico, no plano)
- Base: azul de marca `--green #2563eb`. Cada familia define su acento como UNA
  variable (ej. `--guide-accent`, `--features-accent`) para poder variar el tono por
  familia cambiando un solo valor.
- Derivar todos los tonos del mismo hue (variando opacidad/luminosidad). Nada de
  azules random.
- Fondos alternados muy suaves entre secciones (blanco ↔ azul al 3-5%) para dar ritmo.
- Glows radiales difusos (baja opacidad, ~5-10%) detrás de secciones clave (métricas,
  CTA) para que el color "respire". Es lo que separa "plano" de "vivo".
- CTA final puede llevar degradado de acento en vez de negro plano.
- Conservador con la opacidad: mejor quedarse corto y subir, que saturar.
- Mantener contraste de texto legible (AA) y que funcione en dark mode.

## Animación (sutil y profesional)
- Reveal al scroll: secciones, tarjetas, pasos y métricas con fade-in + translateY
  (16-24px → 0) al entrar en viewport. IntersectionObserver, sin librerías, una sola
  vez por elemento.
- Stagger en grids: delay incremental (~60-80ms) entre elementos.
- Hover: tarjetas con `translateY(-2px)` + transición de borde/sombra; botones con
  cambio de fondo y `translateY(-1px)`; links con flecha que se desplaza a la derecha.
- Acordeón: transición de altura suave. Tabs: leve fade al cambiar panel (reflow con
  `void el.offsetWidth` para reiniciar la animación CSS).
- Conteo de métricas: animar números hacia arriba al entrar en viewport. Valores no
  numéricos (ej. "24/7") se muestran estáticos.
- Duraciones 0.2-0.4s, easing suave. Animar SÓLO `transform` y `opacity` (excepto
  acordeón). Rendimiento fluido en móvil.
- **Obligatorio**: envolver animaciones de movimiento en
  `@media (prefers-reduced-motion: no-preference)`.

## Responsive
- Probar en ~375px (móvil), ~768px (tablet) y desktop.
- Grids colapsan a 1 columna en móvil. Layouts de 2 columnas se apilan.
- Padding lateral se reduce en móvil vía el clamp del contenedor.
- Nada se desborda horizontalmente.

## Iconografía
- SVG de línea inline (stroke ~1.6, `currentColor` para heredar el acento). Nunca
  emojis. Mantener un set coherente por sección.
