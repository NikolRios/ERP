NAV_ITEMS = [
    {
        "slug": "apps",
        "label": "Apps",
        "href": "/apps/",
        "dropdown": {
            "columns": [
                {"title": "Operacion", "links": ["Ventas y cobranza", "Compras y pagos", "Inventarios"]},
                {"title": "Control", "links": ["Clientes", "Proveedores", "Almacenes"]},
            ],
            "aside_title": "Modulos conectados",
            "aside_text": "Activa solo lo que necesitas y conserva ventas, compras e inventario trabajando con la misma informacion.",
        },
    },
    {
        "slug": "platform",
        "label": "Plataforma",
        "href": "/plataforma/",
        "dropdown": {
            "columns": [
                {"title": "Inteligencia", "links": ["Modo Analista", "Modo Asistente", "Acciones recientes"]},
                {"title": "Automatizacion", "links": ["Alertas de stock", "Reorden sugerido", "Borradores listos"]},
            ],
            "aside_title": "IA con contexto",
            "aside_text": "Consulta, decide y crea acciones operativas sin perder visibilidad sobre lo que sucede en tu negocio.",
        },
    },
    {
        "slug": "billing",
        "label": "Facturacion",
        "href": "/facturacion/",
        "dropdown": {
            "columns": [
                {"title": "CFDI 4.0", "links": ["Timbrado SAT", "Complementos de pago", "Notas de credito"]},
                {"title": "Validacion", "links": ["RFC y regimen", "Codigo postal fiscal", "CSD y PAC"]},
            ],
            "aside_title": "Facturacion en Mexico",
            "aside_text": "Emite, descarga y cancela CFDI desde el mismo flujo de venta, con datos fiscales siempre a la vista.",
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
        "slug": "clients",
        "label": "Clientes",
        "href": "/clientes/",
        "dropdown": {
            "columns": [
                {"title": "Resultados", "links": ["Menos captura", "Mas control", "Cobranza clara"]},
                {"title": "Equipos", "links": ["Ventas", "Finanzas", "Operacion"]},
            ],
            "aside_title": "Adopcion simple",
            "aside_text": "Una experiencia pensada para equipos que necesitan orden sin frenar su ritmo diario.",
        },
    },
]

SECTION_TEMPLATES = {
    "apps": "pages/sections/apps.html",
    "platform": "pages/sections/platform.html",
    "billing": "pages/sections/billing.html",
    "pricing": "pages/sections/pricing_skeleton.html",
    "clients": "pages/sections/clients.html",
}

PAGE_CONTENT = {
    "apps": {
        "id": "modules",
        "title": "Modulos que ordenan cada peso, producto y cliente sin hacer pesado el ERP.",
        "description": "UniSuite convierte procesos de ventas, compras e inventario en flujos claros para que tu equipo venda, cobre, compre y entregue con menos friccion.",
        "items": [
            {
                "initial": "V",
                "color": "#1d4ed8",
                "title": "Ventas y Cobranza Intuitiva",
                "description": "Clientes, pedidos, facturas y pagos conectados para que puedas convertir cada venta en dinero registrado sin perseguir informacion.",
                "features": [
                    "Credito y terminos por cliente para que puedas vender con reglas claras",
                    "Reservas de inventario al confirmar pedidos para que puedas evitar sobreventas",
                    "Cobranza rapida y recibos de caja para que puedas cerrar saldos en menos pasos",
                ],
                "cta_label": "Ver facturacion",
                "cta_href": "/facturacion/",
            },
            {
                "initial": "G",
                "color": "#0284c7",
                "title": "Control de Gastos y Proveedores",
                "description": "Compras, gastos y pagos por proveedor en un solo flujo para que puedas saber que debes, cuando vence y como impacta tu caja.",
                "features": [
                    "Carga de XML de proveedor para que puedas registrar gastos sin capturar todo a mano",
                    "Pagos individuales o masivos para que puedas liquidar facturas sin perder trazabilidad",
                    "Vinculacion fiscal de comprobantes para que puedas mantener tus deducciones listas",
                ],
            },
            {
                "initial": "I",
                "color": "#3b82f6",
                "title": "Inventarios y Multi-Almacen",
                "description": "Existencias, ubicaciones, transferencias y kits sincronizados para que puedas vender con stock confiable en cada sucursal o bodega.",
                "features": [
                    "Stock minimo y alertas para que puedas reponer antes de quedarte sin producto",
                    "Ubicaciones por almacen para que puedas saber de que estante sale cada venta",
                    "Transferencias y kits para que puedas mover o armar productos sin descuadrar inventario",
                ],
                "cta_label": "Explorar operacion",
                "cta_href": "/plataforma/",
            },
        ],
    },
    "platform": {
        "id": "platform",
        "eyebrow": "IA operativa",
        "title": "Una capa inteligente que analiza, sugiere y prepara acciones sin quitarte el control.",
        "description": "UniSuite usa IA para responder preguntas del negocio, crear registros con lenguaje natural y anticipar decisiones de inventario, compras e impuestos.",
        "features": [
            {
                "number": "1",
                "title": "Modo Analista",
                "description": "Preguntas naturales sobre ventas, clientes o cobranza para que puedas detectar prioridades sin construir reportes.",
            },
            {
                "number": "2",
                "title": "Modo Asistente",
                "description": "Creacion guiada de gastos, pedidos o tareas para que puedas avanzar operacion con menos captura manual.",
            },
            {
                "number": "3",
                "title": "Sugerencias inteligentes",
                "description": "Categorias contables, impuestos y compras sugeridas para que puedas reducir errores antes de contabilizar.",
            },
        ],
        "purchase_note": "Cuando la operacion empieza a crecer, la IA ayuda a priorizar que comprar, que cobrar y que revisar primero.",
        "purchase_cta": "Ver automatizacion",
        "workflow": [
            {"key": "STK", "title": "Alerta de stock minimo", "description": "Detecta productos por debajo del punto de seguridad", "status": "Ahora"},
            {"key": "IA", "title": "Prediccion de demanda", "description": "Analiza ventas pasadas y temporada para sugerir cantidad", "status": "Auto"},
            {"key": "OC", "title": "Orden de compra en borrador", "description": "Agrupa articulos por proveedor y deja la compra lista", "status": "Lista"},
            {"key": "CTRL", "title": "Revision del equipo", "description": "La accion queda pendiente hasta que alguien la apruebe", "status": "Seguro"},
        ],
    },
    "billing": {
        "id": "finance",
        "title": "Facturacion CFDI 4.0 lista para Mexico, sin brincar entre portales.",
        "description": "Emite facturas, notas de credito y complementos de pago desde UniSuite con datos fiscales validados y seguimiento claro ante el SAT.",
        "calculator_title": "Simula tu CFDI",
        "features": [
            {
                "title": "Datos fiscales validados",
                "description": "RFC, regimen y codigo postal fiscal visibles para que puedas timbrar sin rechazos por datos maestros incompletos.",
            },
            {
                "title": "CSD y PAC conectados",
                "description": "Certificados y credenciales configurados una sola vez para que puedas emitir CFDI oficiales desde el flujo de venta.",
            },
            {
                "title": "Complementos de pago",
                "description": "Forma de pago, moneda y tipo de cambio preparados para que puedas cumplir cuando tus clientes pagan en parcialidades.",
            },
            {
                "title": "Cancelacion nativa SAT",
                "description": "Motivos de cancelacion y UUID de sustitucion integrados para que puedas corregir facturas sin salir del sistema.",
            },
        ],
    },
    "pricing": {
        "id": "pricing",
        "eyebrow": "Planes por etapa",
        "title": "Elige el plan que acompane tu operacion.",
        "description": "Empieza con ventas y CFDI, suma compras e inventario cuando necesites control operativo, y activa IA cuando quieras automatizar decisiones.",
        "billing_periods": ["Mensual", "Anual"],
        "tabs": ["Todos", "Ventas", "Operacion", "IA"],
        "plan": "Plan Operativo",
        "price": "Cotizar",
        "period": "segun modulos activos",
        "features": [
            "Ventas, compras e inventarios conectados",
            "CFDI 4.0 y complementos de pago",
            "Control de almacenes y proveedores",
            "Reportes para operacion y finanzas",
        ],
        "primary_cta": "Solicitar demo",
        "secondary_cta": "Hablar con ventas",
        "plans": [
            {
                "name": "Plan Emprendedor",
                "tag": "Ventas y CFDI",
                "price": "Cotizar",
                "period": "para equipos que empiezan",
                "featured": False,
                "cta": "Solicitar demo",
                "secondary_cta": "o hablar con ventas",
                "features": [
                    "Ventas y clientes para que puedas ordenar tu cartera desde el primer dia",
                    "Facturacion CFDI 4.0 para que puedas emitir documentos validos ante el SAT",
                    "Cobranza rapida para que puedas registrar pagos sin pasos contables complejos",
                    "Complementos de pago para que puedas cumplir cuando cobras en parcialidades",
                ],
                "addons_title": "Puedes sumar despues:",
                "addons": ["Compras y proveedores", "Inventarios", "Automatizacion con IA"],
            },
            {
                "name": "Plan Operativo",
                "tag": "Mas popular",
                "price": "Cotizar",
                "period": "para equipos en crecimiento",
                "featured": True,
                "cta": "Solicitar demo",
                "secondary_cta": "o revisar alcance",
                "features": [
                    "Compras y cuentas por pagar para que puedas controlar egresos y vencimientos",
                    "Inventarios y multi-almacen para que puedas vender con existencias confiables",
                    "Transferencias y ubicaciones para que puedas mover mercancia sin perder rastro",
                    "Kits y ensamblajes para que puedas armar productos listos para venta",
                ],
                "addons_title": "Puedes sumar despues:",
                "addons": ["Analisis con IA", "Reorden inteligente", "Automatizacion avanzada"],
            },
            {
                "name": "Plan Inteligente",
                "tag": "IA + automatizacion",
                "price": "Cotizar",
                "period": "para operar con datos",
                "featured": False,
                "cta": "Solicitar demo",
                "secondary_cta": "o ver automatizaciones",
                "features": [
                    "Modo Analista para que puedas preguntar por ventas, productos y clientes clave",
                    "Modo Asistente para que puedas crear gastos o pedidos con lenguaje natural",
                    "Reorden con IA para que puedas comprar antes de romper stock",
                    "Sugerencias fiscales y contables para que puedas reducir errores operativos",
                ],
                "addons_title": "Incluye tambien:",
                "addons": ["Ventas y CFDI", "Compras y pagos", "Inventarios y almacenes"],
            },
        ],
    },
    "clients": {
        "id": "stories",
        "title": "Hecha para equipos que quieren orden sin perder velocidad.",
        "description": "UniSuite traduce procesos de ERP en una experiencia clara para vender, cobrar, comprar, mover inventario y tomar mejores decisiones.",
        "testimonials": [
            {"quote": "Ventas dejo de prometer producto que no estaba disponible y cobranza ve al instante que facturas siguen abiertas.", "author": "Mariana Lopez, direccion comercial"},
            {"quote": "Compras ya no depende de hojas sueltas. Sabemos que debemos, que vence y que proveedor necesita seguimiento.", "author": "Daniel Kim, operaciones"},
            {"quote": "El equipo de almacen puede mover producto entre sucursales sin perder el historial de cada ajuste.", "author": "Valeria Soto, control de inventario"},
            {"quote": "La IA nos ayuda a revisar ventas, detectar faltantes y preparar compras sin quitarle control al equipo.", "author": "Rafael Ortega, direccion general"},
        ],
    },
}
