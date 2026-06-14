# Patrones UI/UX de Freshworks (catálogo)

Derivados del análisis de freshworks.com/latam (home) y sus páginas de producto
(Freshservice ITSM, AI Agent Studio, etc.). Estos son los bloques reutilizables. Cada
familia de contenido usa un subconjunto — ver content-families.md.

## Principios generales (toda la marca)
- Fondo blanco limpio, sin decoración pesada. Bordes finos 1px, radios 8-12px.
- Tipografía sans pesada con tracking negativo en titulares. H2 en frases de
  beneficio ("sin complicaciones", "generar valor").
- Copy muy breve por sección (1-2 líneas).
- Acento de color presente pero no saturado.
- Flujo narrativo AIDA: atención (hero) → interés (productos/features) → deseo
  (métricas/testimonios) → acción (CTAs). Cada sección empuja a la siguiente.
- Prueba social en 3 capas: logos de marca, métricas con fuente, citas con nombre/cargo.
- CTAs: primario relleno (acento), secundario outline. Repetidos al inicio y final.

## 1. Navbar sticky
Logo a la izquierda, navegación al centro/derecha, CTAs a la derecha. (En Majjun ya
existe el navbar real — no se rediseña, se respeta.)

## 2. Hero
Eyebrow (etiqueta de categoría) + H1 corto de beneficio + subtítulo de 1 línea +
2 CTAs. Centrado o alineado a la izquierda según la página.

## 3. Anchor nav sticky (sólo páginas largas tipo guía)
Barra de tabs debajo del hero que ancla a las secciones y resalta la activa al hacer
scroll (scroll-spy). NO usar en landings cortas.

## 4. Trust bar
Texto de confianza + fila de logos/etiquetas (marcas o industrias). Puede ir animada
(scroll horizontal de logos) o estática como pills.

## 5. Tarjetas de producto / solución
Grid de 2-3 tarjetas. Cada una: etiqueta de categoría, título, descripción breve,
opcionalmente lista de features y CTA. Imagen/mockup o icono.

## 6. Feature destacada + acordeón
Una característica grande (visual a un lado) + lista de sub-beneficios en acordeón al
otro lado. (En inventarios: pasos a la izquierda + acordeón de detalles a la derecha.)

## 7. Bloque de IA
Sección de acento que destaca capacidades de IA (en Freshworks: "Freddy AI"). Título
+ puntos + link. Suele tener un tratamiento visual diferenciado (fondo o acento).

## 8. Banda de métricas / stats
Números grandes (96%, 74%, 2x...) con labels cortos. Sin tarjetas pesadas, las cifras
son el protagonista. Conteo animado al entrar en viewport cuando son numéricas.

## 9. Tabs de casos de uso intercambiables
Pestañas tipo "For employees / For IT agents / For IT leaders" que cambian el panel
mostrado (texto a un lado, visual al otro). Sin recargar.

## 10. Grid de capabilities
Tarjetas con icono + título + descripción, enlazadas a sub-páginas.

## 11. Testimonios
Carrusel/slider. Cada testimonio: cita, nombre + cargo + empresa, foto/logo. Thumbnails
de logos como navegación secundaria.

## 12. Premios / accolades
Logos de G2, Capterra, etc. como capa extra de confianza (opcional).

## 13. Resources grid
3-4 tarjetas con etiqueta de tipo (Report/Guide/Whitepaper), título, descripción.

## 14. FAQ acordeón
Preguntas que se expanden/contraen. Al final de páginas de producto.

## 15. CTA tripartito final
3 columnas con rutas de conversión según etapa (Prueba / Demo / Recursos), sobre fondo
oscuro o de acento.
