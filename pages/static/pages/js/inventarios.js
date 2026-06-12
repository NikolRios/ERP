(function () {
  'use strict';

  // Fix: .section-page tiene overflow:hidden (section_page.css:3) que rompe
  // position:sticky en hijos. Este JS solo carga en /operacion/inventarios/,
  // así que el override no afecta ninguna otra página.
  var sp = document.querySelector('.section-page');
  if (sp) sp.style.overflow = 'visible';

  // ── Accordion ─────────────────────────────────────────────
  document.querySelectorAll('.inv-acc-head').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement;
      var body = item.querySelector('.inv-acc-body');
      var isOpen = item.classList.contains('open');

      // Cierra todos los del mismo contenedor
      item.parentElement.querySelectorAll('.inv-acc-item').forEach(function (s) {
        s.classList.remove('open');
        s.querySelector('.inv-acc-body').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Expande los que arrancan abiertos
  document.querySelectorAll('.inv-acc-item.open .inv-acc-body').forEach(function (b) {
    b.style.maxHeight = b.scrollHeight + 'px';
  });

  // ── Tabs ──────────────────────────────────────────────────
  // revealObserver se define más abajo; se declara aquí para que el handler
  // de tabs pueda accederlo y desregistrar elementos al forzar su visibilidad.
  var revealObserver = null;

  document.querySelectorAll('.inv-uc-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var i = tab.getAttribute('data-uc');

      document.querySelectorAll('.inv-uc-tab').forEach(function (t) {
        t.classList.remove('active');
      });
      document.querySelectorAll('.inv-uc-panel').forEach(function (p) {
        p.classList.remove('active');
      });

      tab.classList.add('active');

      var panel = document.querySelector('.inv-uc-panel[data-panel="' + i + '"]');
      if (!panel) return;

      panel.classList.add('active');
      void panel.offsetWidth; // reflow: reinicia la animación CSS del panel

      // Garantía: si algún elemento del panel quedó con .inv-reveal sin
      // .inv-visible (el observer no los vio porque el panel estaba oculto),
      // los forzamos visibles ahora.
      panel.querySelectorAll('.inv-reveal').forEach(function (el) {
        el.classList.add('inv-visible');
        if (revealObserver) revealObserver.unobserve(el);
      });
    });
  });

  // ── Scroll-spy ────────────────────────────────────────────
  var siteHeader = document.querySelector('.site-header');
  var anchorNav  = document.querySelector('.inv-anchor-nav');
  var invPage    = document.querySelector('.inv-page');

  function syncStickyOffsets() {
    if (!invPage) return;
    var headerHeight = siteHeader ? Math.ceil(siteHeader.getBoundingClientRect().height) : 76;
    var anchorHeight = anchorNav ? Math.ceil(anchorNav.getBoundingClientRect().height) : 70;
    invPage.style.setProperty('--inv-header-height', headerHeight + 'px');
    invPage.style.setProperty('--inv-anchor-height', anchorHeight + 'px');
  }

  syncStickyOffsets();
  window.addEventListener('resize', syncStickyOffsets);

  if ('ResizeObserver' in window) {
    var stickyResizeObserver = new ResizeObserver(syncStickyOffsets);
    if (siteHeader) stickyResizeObserver.observe(siteHeader);
    if (anchorNav) stickyResizeObserver.observe(anchorNav);
  }

  // Mide el offset real en vez de hardcodear, para que aguante cambios de altura
  function getSpyOffset() {
    return (siteHeader ? siteHeader.offsetHeight : 60) +
           (anchorNav  ? anchorNav.offsetHeight  : 53) + 8;
  }

  var sections = document.querySelectorAll(
    '#inv-catalogo, #inv-existencias, #inv-casos, #inv-capacidades, #inv-faq, #inv-empezar'
  );
  var links = document.querySelectorAll('.inv-anchor-link');

  function updateSpy() {
    var pos = window.scrollY + getSpyOffset();
    var current = '';
    sections.forEach(function (sec) {
      if (pos >= sec.offsetTop) current = sec.id;
    });
    links.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateSpy, { passive: true });
  updateSpy();

  // ── Reveal al scroll (IntersectionObserver) ───────────────
  var prefersMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');
  if (!prefersMotion.matches) return;

  // Qué elementos revelar y si tienen stagger entre sí
  var revealConfig = [
    { sel: '.inv-sec-head',        stagger: false },
    { sel: '.inv-benefit-visual',  stagger: false },
    { sel: '.inv-accordion',       stagger: false },
    { sel: '.inv-metric',          stagger: true  },
    { sel: '.inv-cap',             stagger: true  },
    { sel: '.inv-acc-item',        stagger: false },
    { sel: '.inv-fcol',            stagger: true  },
  ];

  // Nota: NO se marca con inv-reveal nada dentro de paneles de tab inactivos.
  // El panel entero entra con la animación CSS invPanelFade cuando se activa.
  // Si algún elemento dentro de un panel activo necesitara reveal, el handler
  // de tabs llama a .inv-visible de forma forzada (ver arriba).
  revealConfig.forEach(function (cfg) {
    document.querySelectorAll(cfg.sel).forEach(function (el, i) {
      // Saltar elementos dentro de paneles de tab (los maneja CSS animation)
      if (el.closest('.inv-uc-panel')) return;
      el.classList.add('inv-reveal');
      if (cfg.stagger) {
        el.style.setProperty('--inv-delay', (i * 70) + 'ms');
      }
    });
  });

  revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('inv-visible');
        revealObserver.unobserve(entry.target); // dispara una sola vez
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.inv-reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

})();
