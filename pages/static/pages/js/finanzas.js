(() => {
  const page = document.querySelector('.fin-page');
  if (!page) return;

  const sectionPage = document.querySelector('.section-page');
  const siteHeader = document.querySelector('.site-header');
  const sticky = page.querySelector('.fin-anchor-nav');
  const menu = sticky?.querySelector('.fin-anchor-inner');
  const thumb = menu?.querySelector('.fin-anchor-thumb');
  const links = menu ? [...menu.querySelectorAll('a')] : [];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // The global page wrapper clips overflow and prevents descendant sticky elements.
  if (sectionPage) sectionPage.style.overflow = 'visible';

  const syncStickyHeight = () => {
    if (!sticky) return;
    const headerHeight = siteHeader ? Math.ceil(siteHeader.getBoundingClientRect().height) : 76;
    page.style.setProperty('--fin-header-height', `${headerHeight}px`);
    page.style.setProperty('--fin-sticky-height', `${Math.ceil(sticky.getBoundingClientRect().height)}px`);
  };

  const getOffset = () => (siteHeader?.offsetHeight || 76) + (sticky?.offsetHeight || 64) + 12;

  const moveThumb = (link) => {
    if (!thumb || !link) return;
    thumb.style.width = `${link.offsetWidth}px`;
    thumb.style.transform = `translate(${link.offsetLeft}px, -50%)`;
  };

  const setActive = (id, center = false) => {
    const active = links.find((link) => link.getAttribute('href') === `#${id}`);
    if (!active) return;

    links.forEach((link) => link.classList.toggle('active', link === active));
    moveThumb(active);
    if (center) {
      active.scrollIntoView({
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const updateActive = () => {
    const position = window.scrollY + getOffset();
    const visualSections = [...sections].sort((a, b) => a.offsetTop - b.offsetTop);
    let current = visualSections[0]?.id;

    visualSections.forEach((section) => {
      if (position >= section.offsetTop) current = section.id;
    });

    if (current) setActive(current);
  };

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      setActive(target.id, true);
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - getOffset(),
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
      });
    });
  });

  syncStickyHeight();
  updateActive();
  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('resize', () => {
    syncStickyHeight();
    updateActive();
  });

  if ('ResizeObserver' in window && sticky) {
    const stickyObserver = new ResizeObserver(() => {
      syncStickyHeight();
      updateActive();
    });
    stickyObserver.observe(sticky);
    if (siteHeader) stickyObserver.observe(siteHeader);
  }

  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fin-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    page.querySelectorAll('.fin-reveal').forEach((element) => observer.observe(element));
  } else {
    page.querySelectorAll('.fin-reveal').forEach((element) => element.classList.add('fin-visible'));
  }
})();
