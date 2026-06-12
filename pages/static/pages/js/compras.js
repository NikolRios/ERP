(function () {
  'use strict';

  // Fix: .section-page tiene overflow:hidden (section_page.css:3) que rompe
  // position:sticky. Solo carga en /operacion/compras-y-proveedores/ y
  // /operacion/logistica-y-almacenes/, no afecta otras páginas.
  var sp = document.querySelector('.section-page');
  if (sp) sp.style.overflow = 'visible';

  // ── Sticky offset sync ────────────────────────────────────
  var siteHeader = document.querySelector('.site-header');
  var anchorNav  = document.querySelector('.ps-anchor-nav');
  var psPage     = document.querySelector('.ps-page');

  function syncOffsets() {
    if (!psPage) return;
    var hh = siteHeader ? Math.ceil(siteHeader.getBoundingClientRect().height) : 76;
    var ah = anchorNav  ? Math.ceil(anchorNav.getBoundingClientRect().height)  : 53;
    psPage.style.setProperty('--ps-header-height', hh + 'px');
    psPage.style.setProperty('--ps-anchor-height', ah + 'px');
  }

  syncOffsets();
  window.addEventListener('resize', syncOffsets);

  if ('ResizeObserver' in window) {
    var ro = new ResizeObserver(syncOffsets);
    if (siteHeader) ro.observe(siteHeader);
    if (anchorNav)  ro.observe(anchorNav);
  }

  // ── Scroll-spy ────────────────────────────────────────────
  function getSpyOffset() {
    return (siteHeader ? siteHeader.offsetHeight : 60) +
           (anchorNav  ? anchorNav.offsetHeight  : 53) + 8;
  }

  var sections = document.querySelectorAll('[id^="ps-step-"]');
  var links    = document.querySelectorAll('.ps-anchor-link');

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

  // ── Reveal on scroll (IntersectionObserver) ───────────────
  var prefersMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');
  if (!prefersMotion.matches) return;

  var revealConfig = [
    { sel: '.ps-step-content', stagger: false },
    { sel: '.ps-tip-card',     stagger: false },
    { sel: '.ps-flow-node',    stagger: true  },
    { sel: '.ps-final',        stagger: false },
  ];

  revealConfig.forEach(function (cfg) {
    document.querySelectorAll(cfg.sel).forEach(function (el, i) {
      el.classList.add('ps-reveal');
      if (cfg.stagger) el.style.setProperty('--ps-delay', (i * 60) + 'ms');
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('ps-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.ps-reveal').forEach(function (el) {
    observer.observe(el);
  });

})();
