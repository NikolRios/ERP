(() => {
  const page = document.querySelector('.features-page, .inv-page, .ps-page, .log-page, .vc-page');
  const wrap = page?.querySelector('.op-sticky-wrap');
  const menu = wrap?.querySelector('.op-pill-nav');
  const thumb = menu?.querySelector('.op-pill-thumb');
  if (!page || !wrap || !menu || !thumb) return;

  const sectionPage = document.querySelector('.section-page');
  const siteHeader = document.querySelector('.site-header');
  const links = [...menu.querySelectorAll(':scope > a')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sectionPage) sectionPage.style.overflow = 'visible';

  const syncOffsets = () => {
    const headerHeight = siteHeader ? Math.ceil(siteHeader.getBoundingClientRect().height) : 76;
    page.style.setProperty('--op-header-height', `${headerHeight}px`);
    page.style.setProperty('--op-sticky-height', `${Math.ceil(wrap.getBoundingClientRect().height)}px`);
  };

  const moveThumb = (link) => {
    if (!link) return;
    thumb.style.width = `${link.offsetWidth}px`;
    thumb.style.transform = `translate(${link.offsetLeft}px, -50%)`;
  };

  const setActive = (id, center = false) => {
    const active = links.find((link) => link.getAttribute('href') === `#${id}`);
    if (!active) return;
    links.forEach((link) => link.classList.toggle('active', link === active));
    moveThumb(active);
    if (center) active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const getOffset = () => (siteHeader?.offsetHeight || 76) + wrap.offsetHeight + 12;

  const updateActive = () => {
    const position = window.scrollY + getOffset();
    let current = sections[0]?.id;
    sections.forEach((section) => {
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
        behavior: 'smooth',
      });
    });
  });

  syncOffsets();
  updateActive();
  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('resize', () => {
    syncOffsets();
    updateActive();
  });

  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(() => {
      syncOffsets();
      updateActive();
    });
    if (siteHeader) observer.observe(siteHeader);
    observer.observe(wrap);
  }
})();
