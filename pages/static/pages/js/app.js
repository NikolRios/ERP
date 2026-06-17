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
    const billingPeriodButtons = document.querySelectorAll('[data-billing-period]');
    const billingPrices = document.querySelectorAll('.home-price[data-monthly-price][data-annual-price]');
    const themeToggle = document.getElementById('themeToggle');
    let currentDemoTab = 0;
    let currentLanguage = 'es';

    const translations = {
      es: {
        aboutLabel: 'Acerca',
        aiCopy: 'El asistente permite crear transacciones como pedidos y facturas, generar reportes y recibir sugerencias inteligentes usando lenguaje natural.',
        aiLabel: 'Agente de inteligencia de negocio',
        aiExpenseCap1: 'Identificar gastos recurrentes de proveedores',
        aiExpenseCap2: 'Preparar los registros de cuentas por pagar correspondientes',
        aiExpenseCap3: 'Enviar sugerencias a una cola de revision para aprobacion y contabilizacion',
        aiExpenseDesc: 'Un agente de IA puede proponer gastos recurrentes comunes y preparar los registros de cuentas por pagar correspondientes.',
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
        aiIntegrationTech: 'OpenAI o Gemini (integraciones en expansión)',
        annual: 'Anual',
        auditTrailCap1: 'Registrar quien, que, cuando y por que en cambios transaccionales',
        auditTrailCap2: 'Rastrear cambios del sistema y acciones de agentes',
        auditTrailCap3: 'Habilitar consultas rapidas de auditoria',
        auditTrailDesc: 'Registro completo de todos los cambios transaccionales y del sistema.',
        auditTrailTitle: 'Rastro de auditoria',
        companyPlaceholder: 'Empresa',
        contactCopy: 'Cuentanos usuarios, modulos y volumen de timbres. Te ayudamos a dimensionar el plan y el proceso de arranque.',
        contactLabel: 'Contacto',
        contactTitle: 'Habla con el equipo que te ayudara a implementar.',
        ctaCopy: 'Agenda una demo, revisa usuarios, modulos y paquetes de timbres de facturacion electronica, y define el plan que encaja con tu operacion.',
        ctaTitle: 'Ve Majjun ERP en accion con tus procesos reales.',
        backendComponent: 'Marco de trabajo del servidor',
        backendDesc: 'Proporciona una base moderna y de alto rendimiento para aplicaciones web e interfaces de programacion de aplicaciones.',
        backendTech: '.NET',
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
        databaseTech: 'PostgreSQL',
        deploymentComponent: 'Despliegue',
        deploymentDesc: 'Usa una canalizacion contenerizada de integracion continua y entrega continua para despliegues automatizados y consistentes.',
        deploymentTech: 'Render / Servicios de Azure',
        emailPlaceholder: 'Correo electronico',
        expensePaymentCap1: 'Crear y rastrear facturas de cuentas por pagar',
        expensePaymentCap2: 'Soportar pagos parciales a proveedores',
        expensePaymentCap3: 'Rastrear saldos pendientes por pagar',
        expensePaymentDesc: 'Administra la creacion y seguimiento de facturas de cuentas por pagar y pagos a proveedores.',
        expensePaymentTitle: 'Flujos de gastos y pagos',
        featureAiCopy: 'Un asistente basado en chat que permite crear transacciones y generar reportes usando lenguaje natural.',
        featureAiPoint1: 'Crear pedidos, facturas y registros operativos',
        featureAiPoint2: 'Reducir captura manual repetitiva',
        featureAiPoint3: 'Recibir sugerencias inteligentes mientras trabajas',
        featureAiTitle: 'Agente de inteligencia de negocio',
        featureDashboardCopy: 'Ofrece visibilidad clara del estado del negocio mediante Tablero moderno.',
        featureDashboardPoint1: 'Tablero moderno para estado del negocio',
        featureDashboardPoint2: 'Reportes generados con lenguaje natural',
        featureDashboardPoint3: 'Visibilidad operativa para tomar decisiones',
        featureDashboardTitle: 'Inteligencia de negocio',
        featureFinanceCopy: 'Simplifica operaciones centrales mediante una interfaz intuitiva impulsada por IA.',
        featureFinancePoint1: 'Flujos claros para la operacion diaria',
        featureFinancePoint2: 'Menos capacitacion y menos friccion',
        featureFinancePoint3: 'Soporte de IA dentro de la experiencia',
        featureFinanceTitle: 'Experiencia de usuario',
        featureProcurementCopy: 'Construccion de agentes de manera dinamica conforme al uso de la aplicacion.',
        featureProcurementPoint1: 'Niveles de seguridad por Modulos y Roles',
        featureProcurementPoint2: 'Niveles de probacion para la gobernanza de los agentes.',
        featureProcurementTitle: 'Eficiencia de desarrollo',
        featuresLabel: 'Enfoque central',
        featuresTitle: 'Un ERP con doble IA, enfocado en operaciones de negocio y eficiencia de desarrollo.',
        financeModuleLabel: 'Nucleo financiero y reportes',
        financialReportsCap1: 'Balanza de comprobacion, Estado de resultados y Balance general',
        financialReportsCap2: 'Reportes de costo de ventas',
        financialReportsCap3: 'Capacidades de exportacion para equipos financieros',
        financialReportsDesc: 'Proporciona reportes bajo demanda y programados para analisis financiero.',
        financialReportsTitle: 'Reportes financieros',
        footerReady: '\u00a9 2026 Majjun ERP · Listo para facturacion electronica 4.0 en Mexico',
        freeMonthNote: 'Un mes gratis',
        generalLedgerCap1: 'Administrar catalogo de cuentas',
        generalLedgerCap2: 'Mapear contabilizaciones desde submayores',
        generalLedgerCap3: 'Registrar y revertir polizas manuales o automatizadas',
        generalLedgerDesc: 'La base de todas las contabilizaciones financieras desde flujos transaccionales.',
        generalLedgerTitle: 'Libro mayor',
        getDemo: 'Ver demo',
        getStarted: 'Empezar',
        heroCopy: 'Majjun ERP es un nuevo sistema de administracion de negocios diseñado para resolver la complejibilidad, el alto costo y los procesos manuales tediosos.',
        heroEyebrow: 'ERP en la nube con IA · Facturacion electronica 4.0',
        heroTitle: '<span>Software para administracion de negocios</span><span>impulsado por IA</span><span>para empresas modernas</span>',
        inventoryLedgerCap1: 'Registrar actualizaciones del libro de inventario',
        inventoryLedgerCap2: 'Contabilizar el costo de ventas durante flujos de venta',
        inventoryLedgerCap3: 'Conectar actualizaciones de valuacion con flujos de compras',
        inventoryLedgerDesc: 'Mantiene un libro separado para rastrear valuacion de inventario y costo de ventas.',
        inventoryLedgerTitle: 'Libro de inventario',
        inventoryModuleLabel: 'Inventario y articulos',
        itemMasterCap1: 'Guardar tipo de articulo como servicio o inventario',
        itemMasterCap2: 'Mantener datos de costo y codigo de articulo',
        itemMasterCap3: 'Rastrear niveles de existencias por almacen',
        itemMasterDesc: 'Rastrea todos los articulos y servicios ofrecidos por el negocio.',
        itemMasterTitle: 'Maestro de articulos',
        learnMore: 'Conocer mas ->',
        login: 'Iniciar sesion',
        messagePlaceholder: 'Mensaje',
        monthly: 'Mensual',
        modulesCopy: 'Majjun ERP organiza la funcionalidad central en modulos operativos. Ventas administra ingresos, Compras controla proveedores, Inventario gestiona existencias y Finanzas estructura contabilidad, reportes y auditoria.',
        modulesLabel: 'Funciones centrales por modulo',
        modulesTitle: 'Modulos clave soportan el ciclo completo del negocio, de ventas a finanzas.',
        mostPopular: 'Mas popular',
        namePlaceholder: 'Nombre',
        orderFlowCap1: 'Crear cliente y orden',
        orderFlowCap2: 'Verificar existencias y reservaciones',
        orderFlowCap3: 'Generar factura y registrar recibo de efectivo',
        orderFlowDesc: 'Administra el proceso estandar de ingresos, incluyendo revision de inventario, facturacion y pago.',
        orderFlowTitle: 'Flujo de orden a pago',
        plusPoint1: 'CRM: Crea prospectos, oportunidades y cotizacion',
        plusPoint2: 'Ventas y Cuentas por Cobrar: Crea ordenes de servicios, facturas y cobranza',
        plusPoint3: 'Servicios: Crear y administrar proyectos y contratos de servicios',
        plusPoint4: 'Cuentas por Pagar: Gestiona gastos y pagos a provedores',
        plusPoint5: 'Finanzas: Gestiona la contabilidad, impuestos, tipos de cambio y reportes finacieros',
        plusPoint6: '<strong>Agentes de IA para gestion de transacciones y reportes analiticos</strong>',
        plusPoint7: '<strong>+ $20/mes por usuario extra</strong>',
        premiumPointIntro: 'Lo mismo que en plus mas:',
        premiumPoint1: 'Compras: Crea y administra compras, importaciones y recepcion de mercancias',
        premiumPoint2: 'Inventarios: Gestiona Inventarios y costos',
        premiumPoint3: '<strong>+ $20/mes por usuario extra</strong>',
        privacy: 'Privacidad',
        procurementModuleLabel: 'Compras y Cuentas por Pagar',
        procurementWorkflowCap1: 'Crear requisiciones de compra',
        procurementWorkflowCap2: 'Enviar solicitudes de aprobacion hasta limites de autoaprobacion',
        procurementWorkflowCap3: 'Convertir a ordenes de compra y registrar recepciones de bienes',
        procurementWorkflowDesc: 'Soporta el proceso completo de requisicion, orden de compra y recepcion de bienes para compras y reabastecimiento de inventario.',
        procurementWorkflowTitle: 'Flujo de compras',
        pricingLabel: 'Precio',
        pricingAiNote: '**Requiere de Suscripcion de OpenAI O Google Gemini y su API Key',
        pricingTitle: 'Licencias simples y paquetes claros de timbres de facturacion electronica.',
        requestDemo: 'Solicitar demo',
        scheduleCall: 'Agendar llamada',
        scheduleCallArrow: 'Agendar llamada ->',
        seeAction: 'Ver en accion ->',
        salesModuleLabel: 'Ventas y Cuentas por Cobrar',
        sendMessage: 'Enviar mensaje',
        stampSupport: 'Soportamos CDFI 4.0 para tu facturacion Electronica',
        stampMore: '... hasta 100k <strong>Contactar ventas</strong>',
        stampTitle: 'Paquetes de timbres (CFDI 4.0)',
        startTrial: 'Iniciar prueba gratis',
        stockManagementCap1: 'Soportar un modelo basico de existencias por almacen',
        stockManagementCap2: 'Usar interfaces de ajuste de existencias',
        stockManagementCap3: 'Reservar inventario para ordenes de venta',
        stockManagementCap4: 'Permite la administracion de kits de ventas y recetas para empresas de alimentos y bebidas',
        stockManagementDesc: 'Rastrea inventario actual y administra transacciones que afectan las existencias.',
        stockManagementTitle: 'Gestion de existencias',
        toastReady: 'Tu demo de Majjun ERP esta lista para configurarse.',
        toastTitle: 'Listo',
        terms: 'Terminos',
        technicalCopy: 'Majjun ERP se construye con decisiones tecnologicas robustas que soportan interfaces de alto rendimiento, aislamiento de datos entre clientes, despliegue contenerizado y agentes impulsados por IA.',
        technicalLabel: 'Implementacion tecnica',
        technicalTitle: 'Estandares modernos para escalabilidad, seguridad y eficiencia de desarrollo.',
        trustAi: 'Asistencia con IA',
        trustAiCopy: 'Utiliza lenguaje natural para la consulta de informacion de tu sistema y la generacion de transaciones recurrentes (Chat).',
        trustFinance: 'Finanzas',
        trustFinanceCopy: 'Libro mayor, reportes financieros, auditoria y visibilidad clara del estado del negocio.',
        trustInvoicing: 'Facturacion',
        trustInvoicingCopy: 'Crea clientes, ordenes, facturas directas y registra pagos del flujo de orden a cobranza.',
        trustProcurement: 'Compras',
        trustProcurementCopy: 'Gestiona requisiciones, aprobaciones, ordenes de compra, recepciones y pagos a proveedores.',
        watchDemo: 'Ver demo',
        whyCopy: 'Majjun ERP esta diseñado para empresas modernas que necesitan una alternativa mas simple e inteligente a los sistemas ERP tradicionales. Reduce complejidad, costo operativo y captura manual repetitiva mediante un enfoque innovador de doble IA.',
        whyLabel: 'Descripcion del sistema',
        whyTitle: 'Un ERP moderno creado para quitar friccion a las operaciones de negocio.',
      },
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
      currentLanguage = 'es';
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

    function setBillingPeriod(period) {
      const isAnnual = period === 'annual';

      billingPeriodButtons.forEach(button => {
        const isActive = button.dataset.billingPeriod === period;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      billingPrices.forEach(price => {
        const periodLabel = price.querySelector('span');
        price.firstChild.textContent = isAnnual ? price.dataset.annualPrice : price.dataset.monthlyPrice;
        if (periodLabel) periodLabel.textContent = isAnnual ? '/ Año' : '/ Mes';
      });

      document.querySelectorAll('.free-month-note').forEach(note => {
        note.hidden = !isAnnual;
      });
    }

    function setTheme(theme) {
      const isDark = theme === 'dark';
      document.documentElement.classList.toggle('dark', isDark);
      document.body.classList.toggle('dark', isDark);

      if (themeToggle) {
        themeToggle.textContent = isDark ? '☼' : '☾';
        themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
        themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      }
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

    themeToggle?.addEventListener('click', () => {
      const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      try {
        localStorage.setItem('majjunTheme', nextTheme);
      } catch (error) {
      }
      setTheme(nextTheme);
    });

    langButtons.forEach(button => {
      button.addEventListener('click', () => setLanguage(button.dataset.langOption));
    });

    moduleTabs.forEach(tab => {
      tab.addEventListener('click', () => setActiveModule(tab.dataset.moduleTab));
    });

    billingPeriodButtons.forEach(button => {
      button.addEventListener('click', () => setBillingPeriod(button.dataset.billingPeriod));
    });

    [hours, rate].forEach(input => input?.addEventListener('input', updateTotal));

    document.getElementById('sendInvoice')?.addEventListener('click', () => {
      showToast('Factura demo creada en Majjun ERP.');
    });

    contactActions.forEach(action => {
      action.addEventListener('click', () => {
        if (selectedPlan && action.dataset.plan === 'Premium') {
          selectedPlan.value = action.dataset.plan;
        } else if (selectedPlan) {
          selectedPlan.value = 'Plus';
        }
        const preparedText = 'Formulario preparado para ' + (action.dataset.plan || 'tu demo') + '.';
        showToast(preparedText);
      });
    });

    contactForm?.addEventListener('submit', async event => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const submitButton = contactForm.querySelector('[type="submit"]');
      const formData = new FormData(contactForm);
      submitButton.disabled = true;

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        const result = await response.json();

        showToast(result.message || 'No fue posible enviar el mensaje.');
        if (response.ok) {
          contactForm.reset();
          if (selectedPlan) selectedPlan.value = 'Plus';
        }
      } catch (error) {
        showToast('No fue posible enviar el mensaje. Intenta de nuevo.');
      } finally {
        submitButton.disabled = false;
      }
    });

    document.getElementById('salesCta')?.addEventListener('click', () => {
      showToast('Ventas puede ayudarte a dimensionar usuarios, modulos y timbres CFDI.');
    });

    updateTotal();
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    setLanguage(currentLanguage);
    if (moduleTabs.length) setActiveModule(moduleTabs[0].dataset.moduleTab);
    if (billingPeriodButtons.length) setBillingPeriod('monthly');
