    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    const total = document.getElementById('total');
    const hours = document.getElementById('hours');
    const rate = document.getElementById('rate');
    const revealItems = document.querySelectorAll('.reveal');
    const counters = document.querySelectorAll('[data-count]');
    const demoTabs = document.querySelectorAll('[data-demo-tab]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const contactActions = document.querySelectorAll('[data-contact-action]');
    const contactForm = document.getElementById('homeContactForm');
    const selectedPlan = document.getElementById('selectedPlan');
    const langButtons = document.querySelectorAll('[data-lang-option]');
    const moduleTabs = document.querySelectorAll('[data-module-tab]');
    const moduleCards = document.querySelectorAll('[data-module-card]');
    let currentDemoTab = 0;
    let currentLanguage = localStorage.getItem('majjunLanguage') || 'es';

    const translations = {
      es: {
        aboutLabel: 'Acerca',
        aiCopy: 'El asistente permite crear transacciones como pedidos y facturas, generar reportes y recibir sugerencias inteligentes usando lenguaje natural.',
        aiLabel: 'Agente de inteligencia de negocio',
        aiExpenseCap1: 'Identificar gastos recurrentes de proveedores',
        aiExpenseCap2: 'Preparar las entradas AP correspondientes',
        aiExpenseCap3: 'Enviar sugerencias a una cola de revision para aprobacion y contabilizacion',
        aiExpenseDesc: 'Un agente de IA puede proponer gastos recurrentes comunes y preparar las entradas AP correspondientes.',
        aiExpenseTitle: 'Asistencia de gastos con IA',
        aiSalesCap1: 'Sugerir codigos de impuesto para partidas de factura',
        aiSalesCap2: 'Validar no conformidades',
        aiSalesCap3: 'Apoyar decisiones de facturacion durante la creacion de la factura',
        aiSalesDesc: 'El asistente de IA se integra directamente en el proceso de facturacion.',
        aiSalesTitle: 'Asistencia de ventas con IA',
        aiTitle: 'Crea transacciones y reportes desde una conversacion simple.',
        aiWorkflowDemo: 'Demo de flujo con IA',
        aiIntegrationComponent: 'Integracion de IA',
        aiIntegrationDesc: 'Impulsa la integracion de modelos de lenguaje para los agentes de inteligencia de negocio y generacion de codigo.',
        aiIntegrationTech: 'OpenAI API o Azure OpenAI',
        annual: 'Anual -1 mes',
        auditTrailCap1: 'Registrar quien, que, cuando y por que en cambios transaccionales',
        auditTrailCap2: 'Rastrear cambios del sistema y acciones de agentes',
        auditTrailCap3: 'Habilitar consultas rapidas de auditoria',
        auditTrailDesc: 'Registro completo de todos los cambios transaccionales y del sistema.',
        auditTrailTitle: 'Rastro de auditoria',
        companyPlaceholder: 'Empresa',
        contactCopy: 'Cuentanos usuarios, modulos y volumen de timbres. Te ayudamos a dimensionar el plan y el proceso de arranque.',
        contactLabel: 'Contacto',
        contactTitle: 'Habla con el equipo que te ayudara a implementar.',
        ctaCopy: 'Agenda una demo, revisa usuarios, modulos y paquetes de timbres CFDI, y define el plan que encaja con tu operacion.',
        ctaTitle: 'Ve Majjun ERP en accion con tus procesos reales.',
        backendComponent: 'Backend Framework',
        backendDesc: 'Proporciona una base moderna y de alto rendimiento para aplicaciones web y APIs.',
        backendTech: '.NET 10 (LTS), ASP.NET Core MVC',
        customerMasterCap1: 'Crear registros de cliente',
        customerMasterCap2: 'Leer, actualizar y eliminar registros de cliente',
        customerMasterCap3: 'Mantener informacion de contacto y terminos de facturacion',
        customerMasterDesc: 'Almacena todos los registros de clientes, informacion de contacto y terminos de facturacion.',
        customerMasterTitle: 'Maestro de clientes',
        directInvoiceCap1: 'Crear facturas directas',
        directInvoiceCap2: 'Validar terminos de credito del cliente',
        directInvoiceCap3: 'Contabilizar en el libro mayor',
        directInvoiceDesc: 'Permite a usuarios de facturacion crear una factura directamente para ventas o servicios puntuales sin una orden de venta previa.',
        directInvoiceTitle: 'Facturacion directa',
        databaseComponent: 'Base de datos',
        databaseDesc: 'Optimizada para operaciones concurrentes, con aislamiento multi-tenant mediante revisiones de seguridad por fila.',
        databaseTech: 'PostgreSQL 15+',
        deploymentComponent: 'Despliegue',
        deploymentDesc: 'Usa una canalizacion CI/CD contenerizada para despliegues automatizados y consistentes.',
        deploymentTech: 'Render / Azure Services',
        emailPlaceholder: 'Email',
        entitiesLabel: 'Entidades clave',
        entitiesList: 'Tenant, User, Customer, Item, Order, Invoice, Payment, PurchaseRequisition, PurchaseOrder, GoodsReceipt, LedgerEntry, AgentAction, AuditRecord',
        expensePaymentCap1: 'Crear y rastrear facturas AP',
        expensePaymentCap2: 'Soportar pagos parciales a proveedores',
        expensePaymentCap3: 'Rastrear saldos pendientes por pagar',
        expensePaymentDesc: 'Administra la creacion y seguimiento de facturas AP y pagos a proveedores.',
        expensePaymentTitle: 'Flujos de gastos y pagos',
        featureAiCopy: 'Un asistente basado en chat que permite crear transacciones y generar reportes usando lenguaje natural.',
        featureAiPoint1: 'Crear pedidos, facturas y registros operativos',
        featureAiPoint2: 'Reducir captura manual repetitiva',
        featureAiPoint3: 'Recibir sugerencias inteligentes mientras trabajas',
        featureAiTitle: 'Agente de inteligencia de negocio',
        featureDashboardCopy: 'Ofrece visibilidad clara del estado del negocio mediante dashboards modernos.',
        featureDashboardPoint1: 'Dashboards modernos para estado del negocio',
        featureDashboardPoint2: 'Reportes generados con lenguaje natural',
        featureDashboardPoint3: 'Visibilidad operativa para tomar decisiones',
        featureDashboardTitle: 'Inteligencia de negocio',
        featureFinanceCopy: 'Simplifica operaciones centrales mediante una interfaz intuitiva impulsada por IA.',
        featureFinancePoint1: 'Flujos claros para la operacion diaria',
        featureFinancePoint2: 'Menos capacitacion y menos friccion',
        featureFinancePoint3: 'Soporte de IA dentro de la experiencia',
        featureFinanceTitle: 'Experiencia de usuario',
        featureProcurementCopy: 'Usa generacion de codigo con IA para acelerar el desarrollo de funciones y mantenimiento del sistema.',
        featureProcurementPoint1: 'Entrega de funciones mas rapida',
        featureProcurementPoint2: 'Ciclos de mantenimiento mas eficientes',
        featureProcurementPoint3: 'Flujos de desarrollo asistidos por IA',
        featureProcurementTitle: 'Eficiencia de desarrollo',
        featuresLabel: 'Enfoque central',
        featuresTitle: 'Un ERP de doble IA enfocado en operaciones de negocio y eficiencia de desarrollo.',
        financeModuleLabel: 'Nucleo financiero y reportes',
        financialReportsCap1: 'Balanza de comprobacion, Estado de resultados y Balance general',
        financialReportsCap2: 'Reportes de COGS',
        financialReportsCap3: 'Capacidades de exportacion para equipos financieros',
        financialReportsDesc: 'Proporciona reportes bajo demanda y programados para analisis financiero.',
        financialReportsTitle: 'Reportes financieros',
        footerReady: '\u00a9 2026 Majjun ERP · Listo para CFDI 4.0 en Mexico',
        generalLedgerCap1: 'Administrar catalogo de cuentas (COA)',
        generalLedgerCap2: 'Mapear contabilizaciones desde submayores',
        generalLedgerCap3: 'Registrar y revertir polizas manuales o automatizadas',
        generalLedgerDesc: 'La base de todas las contabilizaciones financieras desde flujos transaccionales.',
        generalLedgerTitle: 'Libro mayor (GL)',
        getDemo: 'Ver demo',
        getStarted: 'Empezar',
        heroCopy: 'Majjun ERP es un nuevo sistema de planificacion empresarial disenado para resolver la complejidad, el alto costo y la captura manual tediosa.',
        heroEyebrow: 'ERP cloud con IA · CFDI 4.0',
        heroTitle: 'ERP moderno para empresas modernas',
        inventoryLedgerCap1: 'Registrar actualizaciones del libro de inventario',
        inventoryLedgerCap2: 'Contabilizar COGS durante flujos de venta',
        inventoryLedgerCap3: 'Conectar actualizaciones de valuacion con flujos de compras',
        inventoryLedgerDesc: 'Mantiene un libro separado para rastrear valuacion de inventario y costo de ventas (COGS).',
        inventoryLedgerTitle: 'Libro de inventario',
        inventoryModuleLabel: 'Inventario y articulos',
        itemMasterCap1: 'Guardar tipo de articulo como servicio o inventario',
        itemMasterCap2: 'Mantener datos de costo y SKU',
        itemMasterCap3: 'Rastrear niveles de stock por almacen',
        itemMasterDesc: 'Rastrea todos los articulos y servicios ofrecidos por el negocio.',
        itemMasterTitle: 'Maestro de articulos',
        learnMore: 'Conocer mas ->',
        login: 'Login',
        messagePlaceholder: 'Mensaje',
        monthly: 'Mensual',
        modulesCopy: 'Majjun ERP organiza la funcionalidad central en modulos operativos. Ventas administra ingresos, Compras controla proveedores, Inventario gestiona stock y Finanzas estructura contabilidad, reportes y auditoria.',
        modulesLabel: 'Funciones centrales por modulo',
        modulesTitle: 'Modulos clave soportan el ciclo completo del negocio, de ventas a finanzas.',
        mostPopular: 'Mas popular',
        namePlaceholder: 'Nombre',
        orderFlowCap1: 'Crear cliente y orden',
        orderFlowCap2: 'Verificar stock y reservaciones',
        orderFlowCap3: 'Generar factura y registrar recibo de efectivo',
        orderFlowDesc: 'Administra el proceso estandar de ingresos, incluyendo revision de inventario, facturacion y pago.',
        orderFlowTitle: 'Flujo de orden a pago',
        plusPoint1: '1 usuario incluido',
        plusPoint2: '+ $20/mes por usuario extra',
        plusPoint3: 'Para negocios de servicios',
        plusPoint4: 'Minimo 2 usuarios',
        premiumPoint1: '1 usuario incluido',
        premiumPoint2: '+ $80/mes por usuario extra',
        premiumPoint3: 'Para negocios comerciales',
        premiumPoint4: 'Minimo 5 usuarios',
        privacy: 'Privacidad',
        procurementModuleLabel: 'Compras y Cuentas por Pagar (AP)',
        procurementWorkflowCap1: 'Crear requisiciones de compra (PR)',
        procurementWorkflowCap2: 'Enviar solicitudes de aprobacion hasta limites de autoaprobacion',
        procurementWorkflowCap3: 'Convertir a ordenes de compra y registrar recepciones de bienes',
        procurementWorkflowDesc: 'Soporta el proceso completo PR-a-PO-a-GR para compra de bienes y reabastecimiento de inventario.',
        procurementWorkflowTitle: 'Flujo de compras',
        pricingLabel: 'Precio',
        pricingTitle: 'Licencias simples y paquetes CFDI claros.',
        requestDemo: 'Solicitar demo',
        scheduleCall: 'Agendar llamada',
        scheduleCallArrow: 'Agendar llamada ->',
        seeAction: 'Ver en accion ->',
        salesModuleLabel: 'Ventas y Cuentas por Cobrar (AR)',
        sendMessage: 'Enviar mensaje',
        stampMore: '... hasta 100k <strong>Contactar ventas</strong>',
        stampTitle: 'Paquetes de timbres',
        startTrial: 'Iniciar prueba gratis',
        stockManagementCap1: 'Soportar un modelo basico de stock por almacen',
        stockManagementCap2: 'Usar APIs de ajuste de stock',
        stockManagementCap3: 'Reservar inventario para ordenes de venta',
        stockManagementDesc: 'Rastrea inventario actual y administra transacciones que afectan el stock.',
        stockManagementTitle: 'Gestion de stock',
        toastReady: 'Tu demo de Majjun ERP esta lista para configurarse.',
        toastTitle: 'Listo',
        terms: 'Terminos',
        technicalCopy: 'Majjun ERP se construye con decisiones tecnologicas robustas que soportan APIs de alto rendimiento, aislamiento de datos multi-tenant, despliegue contenerizado y agentes impulsados por IA.',
        technicalLabel: 'Implementacion tecnica',
        technicalTitle: 'Estandares modernos para escalabilidad, seguridad y eficiencia de desarrollo.',
        trustAi: 'Asistencia IA',
        trustAiCopy: 'Sugiere codigos de impuesto, valida no conformidades y propone gastos recurrentes para revision.',
        trustFinance: 'Finanzas',
        trustFinanceCopy: 'Libro mayor, reportes financieros, auditoria y visibilidad clara del estado del negocio.',
        trustInvoicing: 'Facturacion',
        trustInvoicingCopy: 'Crea clientes, ordenes, facturas directas y registra pagos del flujo order-to-payment.',
        trustProcurement: 'Compras',
        trustProcurementCopy: 'Gestiona requisiciones, aprobaciones, ordenes de compra, recepciones y pagos a proveedores.',
        watchDemo: 'Ver demo',
        whyCopy: 'Majjun ERP esta disenado para empresas modernas que necesitan una alternativa mas simple e inteligente a los ERP tradicionales. Reduce complejidad, costo operativo y captura manual repetitiva mediante un enfoque innovador de doble IA.',
        whyLabel: 'Descripcion del sistema',
        whyTitle: 'Un ERP moderno creado para quitar friccion a las operaciones de negocio.',
      },
      en: {
        aboutLabel: 'About',
        aiCopy: 'The Assistant lets users create transactions like orders and invoices, generate reports and receive intelligent suggestions using natural language.',
        aiLabel: 'Business Intelligence Agent',
        aiExpenseCap1: 'Identify recurring vendor expenses',
        aiExpenseCap2: 'Draft corresponding AP entries',
        aiExpenseCap3: 'Send suggestions to a review queue for approval and posting',
        aiExpenseDesc: 'An AI agent can propose common recurring expenses and draft the corresponding AP entries.',
        aiExpenseTitle: 'AI Expense Assistance',
        aiSalesCap1: 'Suggest tax codes for invoice line items',
        aiSalesCap2: 'Validate non-conformance',
        aiSalesCap3: 'Support billing decisions during invoice creation',
        aiSalesDesc: 'The AI assistant integrates directly into the invoicing process.',
        aiSalesTitle: 'AI Sales Assistance',
        aiTitle: 'Create transactions and reports from a simple conversation.',
        aiWorkflowDemo: 'AI workflow demo',
        aiIntegrationComponent: 'AI Integration',
        aiIntegrationDesc: 'Powers Large Language Model integration for both Business Intelligence and Code Generation agents.',
        aiIntegrationTech: 'OpenAI API or Azure OpenAI',
        annual: 'Annual -1 mo',
        auditTrailCap1: 'Log who, what, when and why for transactional changes',
        auditTrailCap2: 'Track system changes and agent actions',
        auditTrailCap3: 'Enable quick audit queries',
        auditTrailDesc: 'Comprehensive logging of all transactional and system changes.',
        auditTrailTitle: 'Audit Trail',
        companyPlaceholder: 'Company',
        contactCopy: 'Tell us your users, modules and stamp volume. We will help size the plan and rollout process.',
        contactLabel: 'Contact',
        contactTitle: 'Talk with the team that will help you implement.',
        ctaCopy: 'Book a demo, review users, modules and CFDI stamp packages, then define the plan that fits your operation.',
        ctaTitle: 'See Majjun ERP in action with your real processes.',
        backendComponent: 'Backend Framework',
        backendDesc: 'Provides a modern, high-performance foundation for web applications and APIs.',
        backendTech: '.NET 10 (LTS), ASP.NET Core MVC',
        customerMasterCap1: 'Create customer records',
        customerMasterCap2: 'Read, update and delete customer records',
        customerMasterCap3: 'Maintain contact information and billing terms',
        customerMasterDesc: 'Stores all customer records, contact information, and billing terms.',
        customerMasterTitle: 'Customer Master',
        directInvoiceCap1: 'Create direct invoices',
        directInvoiceCap2: 'Validate customer credit terms',
        directInvoiceCap3: 'Post to the General Ledger',
        directInvoiceDesc: 'Allows billing users to create an invoice directly for one-off sales or services without a prior sales order.',
        directInvoiceTitle: 'Direct Invoicing',
        databaseComponent: 'Database',
        databaseDesc: 'Optimized for concurrent operations, supporting multi-tenant isolation through row-level security checks.',
        databaseTech: 'PostgreSQL 15+',
        deploymentComponent: 'Deployment',
        deploymentDesc: 'Uses a containerized CI/CD pipeline for automated and consistent deployment.',
        deploymentTech: 'Render / Azure Services',
        emailPlaceholder: 'Email',
        entitiesLabel: 'Key Entities',
        entitiesList: 'Tenant, User, Customer, Item, Order, Invoice, Payment, PurchaseRequisition, PurchaseOrder, GoodsReceipt, LedgerEntry, AgentAction, AuditRecord',
        expensePaymentCap1: 'Create and track AP invoices',
        expensePaymentCap2: 'Support part-payments to suppliers',
        expensePaymentCap3: 'Track outstanding payable balances',
        expensePaymentDesc: 'Manages the creation and tracking of AP invoices and payments to vendors.',
        expensePaymentTitle: 'Expense & Payment Flows',
        featureAiCopy: 'A chat-based assistant that lets users create transactions and generate reports using natural language.',
        featureAiPoint1: 'Create orders, invoices and operational records',
        featureAiPoint2: 'Reduce repetitive manual data entry',
        featureAiPoint3: 'Receive intelligent suggestions while working',
        featureAiTitle: 'Business Intelligence Agent',
        featureDashboardCopy: 'Offers clear, at-a-glance visibility into business status through modern dashboards.',
        featureDashboardPoint1: 'Modern dashboards for business status',
        featureDashboardPoint2: 'Reports generated from natural language',
        featureDashboardPoint3: 'Operational visibility for decision makers',
        featureDashboardTitle: 'Business Intelligence',
        featureFinanceCopy: 'Simplifies core business operations through an intuitive, AI-driven interface.',
        featureFinancePoint1: 'Clear workflows for daily operations',
        featureFinancePoint2: 'Less training and less friction',
        featureFinancePoint3: 'AI support inside the user journey',
        featureFinanceTitle: 'User Experience',
        featureProcurementCopy: 'Uses AI code generation to speed up feature development and system maintenance.',
        featureProcurementPoint1: 'Faster feature delivery',
        featureProcurementPoint2: 'More efficient maintenance cycles',
        featureProcurementPoint3: 'AI-assisted development workflows',
        featureProcurementTitle: 'Development Efficiency',
        featuresLabel: 'Core approach',
        featuresTitle: 'A dual-AI ERP focused on business operations and development efficiency.',
        financeModuleLabel: 'Finance Core & Reporting',
        financialReportsCap1: 'Trial Balance, Profit & Loss and Balance Sheet',
        financialReportsCap2: 'COGS reports',
        financialReportsCap3: 'Export capabilities for finance teams',
        financialReportsDesc: 'Provides on-demand and scheduled reports for financial analysis.',
        financialReportsTitle: 'Financial Reports',
        footerReady: '\u00a9 2026 Majjun ERP · Mexico CFDI 4.0 ready',
        generalLedgerCap1: 'Manage Chart of Accounts (COA)',
        generalLedgerCap2: 'Map postings from subledgers',
        generalLedgerCap3: 'Post and reverse manual or automated Journal Entries',
        generalLedgerDesc: 'The backbone of all financial postings from transactional flows.',
        generalLedgerTitle: 'General Ledger (GL)',
        getDemo: 'Get demo',
        getStarted: 'Get started',
        heroCopy: 'Majjun ERP is a new Enterprise Resource Planning system designed to solve complexity, high cost and tedious manual data entry.',
        heroEyebrow: 'AI-Powered · Cloud ERP · CFDI 4.0',
        heroTitle: 'Modern ERP for Modern Business',
        inventoryLedgerCap1: 'Record inventory ledger updates',
        inventoryLedgerCap2: 'Post COGS during sales workflows',
        inventoryLedgerCap3: 'Hook valuation updates into procurement flows',
        inventoryLedgerDesc: 'Maintains a separate ledger to track inventory valuation and Cost of Goods Sold (COGS).',
        inventoryLedgerTitle: 'Inventory Ledger',
        inventoryModuleLabel: 'Inventory & Items',
        itemMasterCap1: 'Store item type for service or inventory',
        itemMasterCap2: 'Maintain cost and SKU data',
        itemMasterCap3: 'Track stock levels by warehouse',
        itemMasterDesc: 'Tracks all items and services offered by the business.',
        itemMasterTitle: 'Item Master',
        learnMore: 'Learn more ->',
        login: 'Login',
        messagePlaceholder: 'Message',
        monthly: 'Monthly',
        modulesCopy: 'Majjun ERP organizes core functionality into operational modules. Sales manages revenue, Procurement controls vendors, Inventory handles stock, and Finance structures accounting, reporting and auditability.',
        modulesLabel: 'Core Features by Module',
        modulesTitle: 'Key modules support the full business cycle from sales to finance.',
        mostPopular: 'Most popular',
        namePlaceholder: 'Name',
        orderFlowCap1: 'Create customer and order',
        orderFlowCap2: 'Check stock and reservations',
        orderFlowCap3: 'Generate invoice and record cash receipt',
        orderFlowDesc: 'Manages the standard revenue process, including inventory checks, invoicing, and payment.',
        orderFlowTitle: 'Order-to-Payment Flow',
        plusPoint1: '1 user included',
        plusPoint2: '+ $20/mo per extra user',
        plusPoint3: 'For service businesses',
        plusPoint4: 'Minimum 2 users',
        premiumPoint1: '1 user included',
        premiumPoint2: '+ $80/mo per extra user',
        premiumPoint3: 'For commercial businesses',
        premiumPoint4: 'Minimum 5 users',
        privacy: 'Privacy',
        procurementModuleLabel: 'Procurement & Accounts Payable (AP)',
        procurementWorkflowCap1: 'Create Purchase Requisitions (PR)',
        procurementWorkflowCap2: 'Route approval requests up to auto-approval limits',
        procurementWorkflowCap3: 'Convert to Purchase Orders and record Goods Receipts',
        procurementWorkflowDesc: 'Supports the full PR-to-PO-to-GR process for purchasing goods and inventory replenishment.',
        procurementWorkflowTitle: 'Procurement Workflow',
        pricingLabel: 'Pricing',
        pricingTitle: 'Simple licenses, clear CFDI stamp packages.',
        requestDemo: 'Request demo',
        scheduleCall: 'Schedule a call',
        scheduleCallArrow: 'Schedule a call ->',
        seeAction: 'See it in action ->',
        salesModuleLabel: 'Sales & Accounts Receivable (AR)',
        sendMessage: 'Send message',
        stampMore: '... up to 100k <strong>Contact sales</strong>',
        stampTitle: 'Stamp packages',
        startTrial: 'Start free trial',
        stockManagementCap1: 'Support a basic warehouse stock model',
        stockManagementCap2: 'Use stock adjustment APIs',
        stockManagementCap3: 'Reserve inventory for sales orders',
        stockManagementDesc: 'Tracks current inventory and handles transactions that affect stock.',
        stockManagementTitle: 'Stock Management',
        toastReady: 'Your Majjun ERP demo is ready to configure.',
        toastTitle: 'Ready',
        terms: 'Terms',
        technicalCopy: 'Majjun ERP is built on robust technology choices that support high-performance APIs, multi-tenant data isolation, containerized deployment and AI-powered agents.',
        technicalLabel: 'Technical Implementation',
        technicalTitle: 'Modern standards for scalability, security and development efficiency.',
        trustAi: 'AI Assistance',
        trustAiCopy: 'Suggests tax codes, validates non-conformance and proposes recurring expenses for review.',
        trustFinance: 'Finance',
        trustFinanceCopy: 'General ledger, financial reports, audit trail and clear visibility into business status.',
        trustInvoicing: 'Invoicing',
        trustInvoicingCopy: 'Create customers, orders, direct invoices and record payments across the order-to-payment flow.',
        trustProcurement: 'Procurement',
        trustProcurementCopy: 'Manage requisitions, approvals, purchase orders, goods receipts and vendor payments.',
        watchDemo: 'Watch demo',
        whyCopy: 'Majjun ERP is designed for modern businesses that need a simpler, more intelligent alternative to traditional ERP systems. It reduces complexity, lowers operational overhead and cuts repetitive manual data entry through a dual-AI approach.',
        whyLabel: 'System Description',
        whyTitle: 'A modern ERP built to remove friction from business operations.',
      }
    };

    function showToast(text) {
      if (!toast || !toastText) return;
      toastText.textContent = text;
      toast.classList.add('show');
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    function updateTotal() {
      if (!hours || !rate || !total) return;
      const value = (Number(hours.value) || 0) * (Number(rate.value) || 0);
      total.textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 0
      }).format(value);
    }

    function animateCounter(counter) {
      if (counter.dataset.done) return;
      counter.dataset.done = 'true';
      const target = Number(counter.dataset.count);
      const suffix = counter.dataset.suffix || '';
      const duration = 980;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }

    function setLanguage(language) {
      currentLanguage = translations[language] ? language : 'es';
      const dictionary = translations[currentLanguage];
      document.documentElement.lang = currentLanguage;
      localStorage.setItem('majjunLanguage', currentLanguage);

      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key]) element.textContent = dictionary[key];
      });

      document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.dataset.i18nHtml;
        if (dictionary[key]) element.innerHTML = dictionary[key];
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (dictionary[key]) element.placeholder = dictionary[key];
      });

      langButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.langOption === currentLanguage);
        button.setAttribute('aria-pressed', button.dataset.langOption === currentLanguage ? 'true' : 'false');
      });
    }

    function setActiveNav(targetId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${targetId}`);
      });
    }

    function setActiveModule(moduleName) {
      moduleTabs.forEach(tab => {
        const isActive = tab.dataset.moduleTab === moduleName;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      moduleCards.forEach(card => {
        card.hidden = card.dataset.moduleCard !== moduleName;
      });
    }

    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .16 });

    revealItems.forEach(item => revealObserver.observe(item));

    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .8 });

    counters.forEach(counter => counterObserver.observe(counter));

    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveNav(entry.target.id);
      });
    }, {
      rootMargin: '-42% 0px -48%',
      threshold: 0,
    });

    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section) navObserver.observe(section);
      link.addEventListener('click', () => {
        if (section) setActiveNav(section.id);
      });
    });

    if (demoTabs.length) {
      setInterval(() => {
        demoTabs[currentDemoTab].classList.remove('active');
        currentDemoTab = (currentDemoTab + 1) % demoTabs.length;
        demoTabs[currentDemoTab].classList.add('active');
      }, 2200);
    }

    document.getElementById('themeToggle')?.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });

    langButtons.forEach(button => {
      button.addEventListener('click', () => setLanguage(button.dataset.langOption));
    });

    moduleTabs.forEach(tab => {
      tab.addEventListener('click', () => setActiveModule(tab.dataset.moduleTab));
    });

    [hours, rate].forEach(input => input?.addEventListener('input', updateTotal));

    document.getElementById('sendInvoice')?.addEventListener('click', () => {
      showToast('Factura demo creada en Majjun ERP.');
    });

    contactActions.forEach(action => {
      action.addEventListener('click', () => {
        if (selectedPlan && action.dataset.plan) {
          selectedPlan.value = action.dataset.plan;
        }
        const preparedText = currentLanguage === 'en'
          ? 'Form prepared for ' + (action.dataset.plan || 'your demo') + '.'
          : 'Formulario preparado para ' + (action.dataset.plan || 'tu demo') + '.';
        showToast(preparedText);
      });
    });

    contactForm?.addEventListener('submit', event => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const formData = new FormData(contactForm);
      const name = formData.get('name') || (currentLanguage === 'en' ? 'your team' : 'tu equipo');
      const plan = formData.get('plan') || 'Request demo';
      const submitText = currentLanguage === 'en'
        ? `Thanks, ${name}. We received your request: ${plan}.`
        : `Gracias, ${name}. Recibimos tu solicitud: ${plan}.`;
      showToast(submitText);
      contactForm.reset();
      if (selectedPlan) selectedPlan.value = 'Request demo';
    });

    document.getElementById('salesCta')?.addEventListener('click', () => {
      showToast('Ventas puede ayudarte a dimensionar usuarios, modulos y timbres CFDI.');
    });

    updateTotal();
    setLanguage(currentLanguage);
    if (moduleTabs.length) setActiveModule(moduleTabs[0].dataset.moduleTab);
