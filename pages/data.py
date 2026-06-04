NAV_ITEMS = [
    {
        "slug": "features",
        "label": "Funciones",
        "href": "/funciones/",
        "dropdown": {
            "columns": [
                {
                    "title": "Cobrar y facturar",
                    "links": [
                        {"label": "Invoicing", "href": "/funciones/"},
                        {"label": "Pagos", "href": "/funciones/"},
                        {"label": "CFDI 4.0", "href": "/funciones/"},
                    ],
                },
                {
                    "title": "Operar y controlar",
                    "links": [
                        {"label": "Compras", "href": "/funciones/"},
                        {"label": "Inventarios", "href": "/recursos/#modulo"},
                        {"label": "Finanzas y Contabilidad", "href": "/funciones/finanzas-contabilidad/"},
                        {"label": "Reportes", "href": "/funciones/"},
                    ],
                },
            ],
            "aside_title": "Todo conectado",
            "aside_text": "Ventas, facturacion, compras e inventario en un mismo flujo operativo para evitar doble captura.",
        },
    },
    {
        "slug": "segments",
        "label": "Para quien",
        "href": "/para-quien/",
        "dropdown": {
            "columns": [
                {"title": "Tamano de equipo", "links": ["Freelancers", "Self-employed", "Con empleados"]},
                {"title": "Industria", "links": ["Comercio", "Servicios", "Distribucion"]},
            ],
            "aside_title": "Por tipo de negocio",
            "aside_text": "Encuentra el flujo que mejor se adapta a tu operacion segun tamano, industria y complejidad.",
        },
    },
    {
        "slug": "resources",
        "label": "Recursos",
        "href": "/recursos/",
        "dropdown": {
            "columns": [
                {"title": "Aprende", "links": ["Guia de inicio", "Plantillas", "Blog"]},
                {"title": "Evalua", "links": ["Comparativas", "Casos", "Calculadoras"]},
            ],
            "aside_title": "Centro de conocimiento",
            "aside_text": "Material practico para implementar, comparar y optimizar tus procesos administrativos.",
        },
    },
    {
        "slug": "pricing",
        "label": "Precio",
        "href": "/precio/",
        "dropdown": {
            "columns": [
                {"title": "Planes", "links": ["Emprendedor", "Operativo", "Inteligente"]},
                {"title": "Incluye", "links": ["Ventas", "CFDI", "IA"]},
            ],
            "aside_title": "Escala por etapas",
            "aside_text": "Empieza con ventas y facturacion, suma operacion cuando crezcas y activa IA cuando quieras automatizar.",
        },
    },
    {
        "slug": "support",
        "label": "Soporte",
        "href": "/soporte/",
        "dropdown": {
            "columns": [
                {"title": "Ayuda", "links": ["Centro de ayuda", "Contacto", "Implementacion"]},
                {"title": "Postventa", "links": ["Onboarding", "Capacitacion", "Mesa operativa"]},
            ],
            "aside_title": "Acompañamiento real",
            "aside_text": "Te ayudamos desde la implementacion hasta la adopcion diaria con soporte especializado.",
        },
    },
]

SECTION_TEMPLATES = {
    "features": "pages/sections/features.html",
    "finance_accounting": "pages/sections/finance_accounting.html",
    "segments": "pages/sections/segments.html",
    "resources": "pages/sections/resources.html",
    "pricing": "pages/sections/pricing_skeleton.html",
    "support": "pages/sections/support.html",
}

PAGE_CONTENT = {
    "apps": {
        "id": "modules",
        "title": "Features that keep every invoice, item and ledger entry connected.",
        "description": "Majjun ERP organiza facturacion, compras, inventario, finanzas y auditoria en una sola plataforma cloud para equipos que necesitan control sin friccion.",
        "items": [
            {
                "initial": "AI",
                "color": "#1d4ed8",
                "title": "AI Sales Assistance",
                "description": "Crea facturas, prepara seguimientos y consulta ventas con lenguaje natural sin perder control del flujo comercial.",
                "features": [
                    "Facturas sugeridas desde instrucciones simples",
                    "Alertas de cobranza y clientes prioritarios",
                    "Acciones pendientes antes de cerrar el dia",
                ],
                "cta_label": "Ver asistencia IA",
                "cta_href": "/facturacion/",
            },
            {
                "initial": "FR",
                "color": "#0284c7",
                "title": "Finance & Reporting",
                "description": "Conecta ingresos, egresos, cuentas contables y reportes para entender margen, caja y desempeno por periodo.",
                "features": [
                    "P&L mensual listo para exportar",
                    "Libro mayor y cuentas contables",
                    "Indicadores para direccion y administracion",
                ],
            },
            {
                "initial": "PF",
                "color": "#3b82f6",
                "title": "Procurement Flow",
                "description": "Ordenes de compra, proveedores, vencimientos y gastos conectados con inventario y contabilidad.",
                "features": [
                    "Compras por proveedor con trazabilidad",
                    "Vencimientos y pagos por programar",
                    "XML y comprobantes ligados al gasto",
                ],
                "cta_label": "Explorar operacion",
                "cta_href": "/plataforma/",
            },
            {
                "initial": "GL",
                "color": "#475569",
                "title": "General Ledger & Audit Trail",
                "description": "Registra movimientos contables y deja evidencia clara de usuarios, cambios y documentos relacionados.",
                "features": [
                    "Asientos manuales y ajustes controlados",
                    "Historial por factura, pago y articulo",
                    "Auditoria para equipos administrativos",
                ],
            },
        ],
    },
    "platform": {
        "id": "platform",
        "eyebrow": "AI spotlight",
        "title": "Ask Majjun to create, explain and prepare work across the ERP.",
        "description": "El asistente entiende tareas de ventas, finanzas y compras para convertir instrucciones en borradores, reportes y sugerencias revisables.",
        "features": [
            {
                "number": "1",
                "title": "Create operational records",
                "description": "Pide una factura, gasto o pedido en lenguaje natural y Majjun prepara el borrador con datos clave.",
            },
            {
                "number": "2",
                "title": "Explain financial signals",
                "description": "Consulta ventas, margen, cobranza o P&L sin construir reportes desde cero.",
            },
            {
                "number": "3",
                "title": "Suggest taxes and next steps",
                "description": "Recibe IVA, categorias y acciones sugeridas antes de timbrar, comprar o contabilizar.",
            },
        ],
        "purchase_note": "La IA prepara trabajo, pero tu equipo revisa y aprueba antes de afectar facturas, inventario o contabilidad.",
        "purchase_cta": "See it in action",
        "workflow": [
            {"key": "ASK", "title": "Create invoice for Acme Inc.", "description": "$4,500 services with CFDI data", "status": "Prompt"},
            {"key": "TAX", "title": "Suggested tax: IVA 16%", "description": "Majjun proposes tax treatment before stamping", "status": "Review"},
            {"key": "P&L", "title": "Run this month's P&L report", "description": "Revenue, costs and net income prepared", "status": "Ready"},
            {"key": "PDF", "title": "Export report package", "description": "Share PDF with finance or leadership", "status": "Done"},
        ],
    },
    "billing": {
        "id": "finance",
        "title": "CFDI 4.0 invoicing built into the same operating flow.",
        "description": "Emite facturas, complementos de pago y notas de credito desde Majjun ERP, con datos fiscales y paquetes de timbres conectados a tus ventas.",
        "calculator_title": "Invoice preview",
        "features": [
            {
                "title": "Datos fiscales listos",
                "description": "RFC, regimen y codigo postal fiscal visibles para que puedas timbrar sin rechazos por datos maestros incompletos.",
            },
            {
                "title": "CSD, PAC y timbres",
                "description": "Certificados, credenciales y paquetes de timbres preparados para emitir CFDI oficiales desde el flujo de venta.",
            },
            {
                "title": "Payment complements",
                "description": "Forma de pago, moneda y tipo de cambio preparados para que puedas cumplir cuando tus clientes pagan en parcialidades.",
            },
            {
                "title": "SAT cancellation flow",
                "description": "Motivos de cancelacion y UUID de sustitucion integrados para que puedas corregir facturas sin salir del sistema.",
            },
        ],
    },
    "features": {
        "id": "features",
        "eyebrow": "Majjun para equipos operativos",
        "title": "Convierte ventas, compras e inventario en una operacion proactiva y conectada.",
        "description": "",
        "trust_text": "Equipos de comercio, distribucion y servicios ya operan con Majjun ERP",
        "trust_logos": ["Retail", "Servicios", "Distribucion", "B2B", "eCommerce"],
        "solutions_title": "Soluciones por frente operativo",
        "items": [
            {
                "initial": "F",
                "title": "Facturacion y Cobranza",
                "description": "Convierte pedidos en CFDI y pagos sin recapturar informacion.",
                "features": [
                    "Facturas CFDI 4.0, notas de credito y complementos",
                    "Cobranza con saldos en tiempo real por cliente",
                    "Recordatorios y seguimiento de cuentas por cobrar",
                ],
                "audience": "Para Finanzas y Ventas",
                "cta_label": "Ver flujo fiscal",
                "cta_href": "/funciones/finanzas-contabilidad/",
            },
            {
                "initial": "O",
                "title": "Operacion y Control",
                "description": "Compras, proveedores, inventarios y almacenes en un mismo tablero operativo.",
                "features": [
                    "Compras con vencimientos y control de egresos",
                    "Inventario multi-almacen con transferencias",
                    "Reportes operativos para decisiones diarias",
                ],
                "audience": "Para Operacion y Compras",
            },
            {
                "initial": "I",
                "title": "Inteligencia Aplicada",
                "description": "IA para analizar datos, sugerir acciones y acelerar ejecucion.",
                "features": [
                    "Preguntas en lenguaje natural sobre ventas y margenes",
                    "Borradores de compras y tareas sugeridas",
                    "Priorizacion de riesgos en cobranza y stock",
                ],
                "audience": "Para Direccion y Analisis",
            },
        ],
        "ai_title": "IA integrada en los flujos",
        "ai_points": [
            "Resuelve tareas repetitivas con asistentes y reglas.",
            "Prioriza alertas de stock, cobranza y vencimientos.",
            "Sugiere acciones antes de que aparezcan cuellos de botella.",
        ],
        "impact_title": "Resultados que se miden",
        "impact_metrics": [
            {"value": "40%", "label": "menos captura manual"},
            {"value": "2x", "label": "mas velocidad en cierre operativo"},
            {"value": "24/7", "label": "visibilidad de ventas y stock"},
        ],
        "final_ctas": [
            {"title": "Prueba guiada", "desc": "Activa una prueba con datos demo para ver procesos reales.", "cta": "Probar gratis"},
            {"title": "Demo con experto", "desc": "Revisamos tu operacion y armamos el flujo ideal por area.", "cta": "Agendar demo"},
            {"title": "Recursos", "desc": "Consulta guias de implementacion por modulo y rol.", "cta": "Ver recursos"},
        ],
    },
    "finance_accounting": {
        "id": "finance-accounting",
        "eyebrow": "Modulo operativo",
        "title": "Modulo de Finanzas y Contabilidad",
        "description": "En esta guia aprenderas a organizar tus cuentas, realizar ajustes manuales, gestionar impuestos y entender cuanto dinero esta ganando tu empresa.",
        "sections": [
            {
                "title": "1. Los Cimientos: Tu Catalogo de Cuentas",
                "points": [
                    "Antes de registrar cualquier operacion, necesitas un orden. El Catalogo de Cuentas es tu lista maestra de categorias financieras.",
                    "Ve a Finanzas > Catalogo de Cuentas.",
                    "Resumen: se usan solo para agrupar, por ejemplo Activos Circulantes.",
                    "Contabilizables: son las cuentas donde realmente cae el dinero, por ejemplo Caja Chica.",
                    "Asegurate de marcar la casilla Es Contabilizable para poder usarlas en tus registros.",
                    "Puedes crear niveles para que tus reportes se vean organizados de lo general a lo particular.",
                ],
            },
            {
                "title": "2. Registros Manuales: Asientos de Diario",
                "points": [
                    "Usa esta seccion para ajustes que no vienen de facturas, como depreciaciones o cierres de mes.",
                    "Ve a Finanzas > Asientos de Diario y haz clic en Nuevo Asiento.",
                    "Escribe una descripcion clara, por ejemplo Ajuste de renta anticipada.",
                    "Todo asiento debe estar cuadrado: la suma de tus debitos debe ser exactamente igual a la de tus creditos.",
                    "Puedes guardar tu avance como borrador y, cuando estes listo, hacer clic en Contabilizar.",
                    "Una vez contabilizado, el asiento afectara tus reportes y ya no podra editarse directamente.",
                ],
            },
            {
                "title": "3. Configuracion de Impuestos",
                "points": [
                    "Majjun ERP separa las tasas de los codigos para darte mas flexibilidad.",
                ],
            },
        ],
    },
    "segments": {
        "id": "segments",
        "eyebrow": "Casos de uso",
        "title": "Majjun ERP para cada etapa y tipo de negocio.",
        "description": "La misma base tecnologica, con flujos adaptados al ritmo y necesidad de cada equipo.",
        "segment_intro": "Elige el recorrido que se parece a tu operacion y escala por modulos.",
        "items": [
            {
                "initial": "FR",
                "title": "Freelancers y Self-employed",
                "description": "Controla ingresos, gastos y facturacion sin operar un ERP complejo.",
                "features": [
                    "Cobro rapido con facturas listas para enviar",
                    "Gastos ordenados para cierre mensual",
                    "Vista simple de flujo de efectivo",
                ],
            },
            {
                "initial": "PY",
                "title": "Pymes con operacion diaria",
                "description": "Sincroniza ventas, compras e inventario para reducir errores entre areas.",
                "features": [
                    "Existencias y costos visibles al vender",
                    "Control de proveedores y pagos por vencer",
                    "Procesos entre sucursales con trazabilidad",
                ],
            },
            {
                "initial": "EQ",
                "title": "Equipos en crecimiento",
                "description": "Escala con procesos estandarizados y apoyo de automatizacion.",
                "features": [
                    "Roles y permisos por area",
                    "Reportes compartidos para direccion y finanzas",
                    "IA para priorizar acciones operativas",
                ],
            },
        ],
        "segment_metrics": [
            {"value": "15 min", "label": "para emitir primer CFDI"},
            {"value": "3 areas", "label": "ventas, compras e inventario conectados"},
            {"value": "1 vista", "label": "de indicadores operativos"},
        ],
    },
    "resources": {
        "id": "resources",
        "title": "Recursos para implementar, aprender y mejorar.",
        "description": "Accede a guias, plantillas y comparativas para tomar decisiones con menos incertidumbre.",
        "resource_groups": [
            {
                "title": "Guia de inicio",
                "items": ["Onboarding por modulo", "Checklist de migracion", "Primeros 30 dias"]
            },
            {
                "title": "Biblioteca operativa",
                "items": ["Plantillas de factura", "Politicas de cobranza", "Formatos de inventario"]
            },
            {
                "title": "Analisis y comparativas",
                "items": ["Majjun ERP vs opciones del mercado", "ROI operativo", "Casos de adopcion"]
            },
        ],
        "secondary_title": "Contenido por tema",
        "secondary_items": [
            "Facturacion y CFDI",
            "Compras y proveedores",
            "Inventarios y almacenes",
            "Finanzas para direccion",
            "Automatizacion con IA",
        ],
        "cta_label": "Explorar recursos",
        "cta_href": "/soporte/",
        "module_title": "Modulo de Inventarios",
        "module_intro": "Administra tus productos, controla tus existencias en tiempo real y gestiona tus kits de venta de forma profesional.",
        "module_sections": [
            {
                "title": "1. Tu Catalogo de Productos",
                "points": [
                    "Antes de vender o comprar, define tus productos o servicios en Inventario > Articulos.",
                    "Haz clic en + Nuevo Articulo y selecciona el tipo: Inventario para fisicos o Servicio para intangibles.",
                    "Asigna Codigo unico, Nombre y Precio de Lista para cada articulo.",
                    "Configura Stock Minimo para recibir alertas de recompra.",
                ],
            },
            {
                "title": "2. Kits y Recetas",
                "points": [
                    "Crea un articulo de tipo Kit o Receta cuando vendas paquetes o productos compuestos.",
                    "En la pestana BOM, agrega componentes y cantidades con Anadir Componente.",
                    "Usa Aplicar Precios para calcular costo total y sugerir precio de venta por margen.",
                ],
            },
            {
                "title": "3. Control de Existencias",
                "points": [
                    "Consulta Inventario > Lista de Inventario para revisar En Mano, Reservado y Disponible.",
                    "En Mano: stock fisico actual.",
                    "Reservado: vendido pero no entregado.",
                    "Disponible: libre para nuevas ventas.",
                    "Si hay diferencias, abre el historial con el icono del ojo para ver entradas, salidas, ajustes y usuario responsable.",
                ],
            },
            {
                "title": "4. Ajustes y Transferencias",
                "points": [
                    "Para dano, merma o sobrante, haz ajuste manual desde el icono de Caja con cantidad positiva o negativa.",
                    "Para mover stock entre ubicaciones, usa Inventario > Transferencias.",
                    "La barra de busqueda filtra por nombre o codigo al escribir 3 caracteres.",
                ],
            },
            {
                "title": "5. Armado de Productos",
                "points": [
                    "Si pre-ensamblas kits, entra a Inventario > Ensamblajes y selecciona Crear Ensamblaje.",
                    "Indica Kit y Cantidad a armar.",
                    "Al Completar Ensamblaje, el sistema resta componentes y suma kits terminados listos para venta.",
                ],
            },
        ],
    },
    "pricing": {
        "id": "pricing",
        "eyebrow": "Pricing",
        "title": "Simple licenses, clear CFDI stamp packages.",
        "description": "Elige entre Plus y Premium, cambia mensual o anual, y agrega paquetes de timbres CFDI segun tu volumen.",
        "billing_periods": ["Mensual", "Anual"],
        "tabs": ["Monthly", "Annual"],
        "plan": "Premium",
        "price": "$80",
        "period": "/mo",
        "features": [
            "1 user included",
            "+ $80/mo per extra user",
            "For commercial businesses",
            "Minimum 5 users",
        ],
        "primary_cta": "Get started",
        "secondary_cta": "Contact sales",
        "plans": [
            {
                "name": "Plus",
                "tag": "For service businesses",
                "price": "$43",
                "period": "/mo",
                "featured": False,
                "cta": "Get started",
                "secondary_cta": "1 user included",
                "features": [
                    "+ $20/mo per extra user",
                    "For service businesses",
                    "Minimum 2 users",
                    "Core invoicing, finance and reports",
                ],
                "addons_title": "Includes:",
                "addons": ["CFDI ready", "Basic inventory", "AI assistant"],
            },
            {
                "name": "Premium",
                "tag": "Mas popular",
                "price": "$80",
                "period": "/mo",
                "featured": True,
                "cta": "Get started",
                "secondary_cta": "1 user included",
                "features": [
                    "+ $80/mo per extra user",
                    "For commercial businesses",
                    "Minimum 5 users",
                    "Procurement, inventory and audit trail",
                ],
                "addons_title": "Includes:",
                "addons": ["Advanced AI", "Full finance", "Priority onboarding"],
            },
        ],
        "stamp_title": "CFDI Stamps",
        "stamp_description": "Pay-as-you-go packages included with any plan.",
        "stamp_price": "$15",
        "stamp_period": "/mo",
        "stamps": [
            {"label": "100 stamps", "price": "$180"},
            {"label": "250 stamps", "price": "$390"},
            {"label": "500 stamps", "price": "$680"},
            {"label": "1,000 stamps", "price": "$1,200"},
            {"label": "2,000 stamps", "price": "$2,020"},
            {"label": "... up to 100k", "price": "Contact sales"},
        ],
        "notes": [
            "Annual billing saves you one full month of licenses.",
            "Licenses billed in MXN at the daily exchange rate.",
            "Prices in MXN. No discounts on stamp packs.",
        ],
    },
    "support": {
        "id": "support",
        "eyebrow": "Exito del cliente",
        "title": "Soporte que acompana la operacion completa.",
        "description": "Desde la implementacion hasta el uso diario, Majjun ERP te ayuda a resolver dudas funcionales, fiscales y operativas.",
        "pillars": [
            {"title": "Onboarding guiado", "description": "Configuracion inicial por modulo con objetivos por semana."},
            {"title": "Mesa de ayuda", "description": "Atencion para incidencias, dudas de uso y seguimiento de casos."},
            {"title": "Capacitacion continua", "description": "Sesiones por rol para ventas, finanzas, almacen y direccion."},
        ],
        "faqs": [
            "Cuanto tarda la implementacion inicial?",
            "Puedo migrar mis datos actuales?",
            "Que incluye el soporte postventa?",
            "Como funciona el acompañamiento fiscal CFDI 4.0?",
        ],
        "primary_cta": "Contactar soporte",
        "secondary_cta": "Agendar onboarding",
    },
    "clients": {
        "id": "stories",
        "title": "Why Majjun?",
        "description": "Majjun combina profundidad ERP con una experiencia clara para equipos que necesitan vender, timbrar, comprar, controlar inventario y reportar sin saltar entre sistemas.",
        "testimonials": [
            {"quote": "Facturacion, cobranza y reportes viven en el mismo flujo; el equipo ya no reconstruye informacion al cierre.", "author": "Finance lead"},
            {"quote": "La IA nos ayuda a crear borradores y revisar indicadores sin quitar aprobaciones del proceso.", "author": "Operations manager"},
            {"quote": "Compras e inventario quedaron conectados con evidencia clara de cada movimiento.", "author": "Commercial director"},
            {"quote": "Los paquetes de timbres y las licencias nos permiten crecer con costos visibles.", "author": "Founder"},
        ],
    },
}
