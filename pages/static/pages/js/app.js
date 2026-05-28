    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    const total = document.getElementById('total');
    const hours = document.getElementById('hours');
    const rate = document.getElementById('rate');
    const revealItems = document.querySelectorAll('.reveal');
    const counters = document.querySelectorAll('[data-count]');
    const demoTabs = document.querySelectorAll('[data-demo-tab]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    let currentDemoTab = 0;

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
        currency: 'USD',
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

    function setActiveNav(targetId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${targetId}`);
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

    [hours, rate].forEach(input => input?.addEventListener('input', updateTotal));

    document.getElementById('sendInvoice')?.addEventListener('click', () => {
      showToast('Factura demo enviada. Ready to invoice?');
    });

    ['demoBtn', 'heroCta', 'pricingCta', 'finalCta'].forEach(id => {
      document.getElementById(id)?.addEventListener('click', () => {
        showToast('Prueba creada. Almost there... solo falta elegir tus apps.');
      });
    });

    document.getElementById('erpFitCta')?.addEventListener('click', () => {
      showToast('Te mostramos el plan ERP que encaja con tu operacion.');
    });

    document.getElementById('salesCta')?.addEventListener('click', () => {
      showToast('Ventas puede ayudarte a dimensionar usuarios, modulos y puesta en marcha.');
    });

    updateTotal();
