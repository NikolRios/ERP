(() => {
  const page = document.querySelector('.features-page');
  if (!page) return;

  const sectionPage = document.querySelector('.section-page');
  const siteHeader = document.querySelector('.site-header');
  const stickyNav = page.querySelector('.features-hub-sticky');
  const stickyLinks = [...page.querySelectorAll('.features-hub-sticky a')];
  const stickySections = stickyLinks
    .map((link) => page.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sectionPage) sectionPage.style.overflow = 'visible';

  const syncStickyOffsets = () => {
    const headerHeight = siteHeader ? Math.ceil(siteHeader.getBoundingClientRect().height) : 76;
    const stickyHeight = stickyNav ? Math.ceil(stickyNav.getBoundingClientRect().height) : 62;
    page.style.setProperty('--features-header-height', `${headerHeight}px`);
    page.style.setProperty('--features-sticky-height', `${stickyHeight}px`);
  };

  const getStickyOffset = () => {
    const headerHeight = siteHeader ? siteHeader.offsetHeight : 76;
    const stickyHeight = stickyNav ? stickyNav.offsetHeight : 62;
    return headerHeight + stickyHeight + 12;
  };

  const updateStickyActive = () => {
    const position = window.scrollY + getStickyOffset();
    let current = stickySections[0]?.id || '';
    stickySections.forEach((section) => {
      if (position >= section.offsetTop) current = section.id;
    });
    stickyLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  syncStickyOffsets();
  updateStickyActive();
  window.addEventListener('resize', syncStickyOffsets);
  window.addEventListener('scroll', updateStickyActive, { passive: true });

  if ('ResizeObserver' in window) {
    const stickyResizeObserver = new ResizeObserver(syncStickyOffsets);
    if (siteHeader) stickyResizeObserver.observe(siteHeader);
    if (stickyNav) stickyResizeObserver.observe(stickyNav);
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = [...page.querySelectorAll('.features-hub-reveal')];
  const counters = [...page.querySelectorAll('[data-feature-count]')];

  const runCounter = (element) => {
    if (element.dataset.counted === 'true') return;
    element.dataset.counted = 'true';

    const target = Number(element.dataset.featureCount);
    const suffix = element.dataset.featureSuffix || '';

    if (reducedMotion || !Number.isFinite(target)) {
      element.textContent = `${target}${suffix}`;
      return;
    }

    const duration = 900;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('features-hub-visible'));
    counters.forEach(runCounter);
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('features-hub-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -48px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      runCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.45 });

  counters.forEach((counter) => counterObserver.observe(counter));
})();
