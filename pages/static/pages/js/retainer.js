(() => {
  const page = document.querySelector('.ret-page');
  if (!page) return;

  const sectionPage = document.querySelector('.section-page');
  const siteHeader = document.querySelector('.site-header');
  const sticky = page.querySelector('.ret-anchor-nav');
  const menu = sticky?.querySelector('.ret-anchor-inner');
  const thumb = menu?.querySelector('.ret-anchor-thumb');
  const links = menu ? [...menu.querySelectorAll('a')] : [];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // The global section wrapper clips overflow, which prevents descendant sticky elements.
  if (sectionPage) sectionPage.style.overflow = 'visible';

  page.querySelectorAll('.ret-flow li').forEach((item, index) => {
    item.style.setProperty('--ret-flow-index', index);
  });

  const syncStickyHeight = () => {
    if (!sticky) return;
    const headerHeight = siteHeader ? Math.ceil(siteHeader.getBoundingClientRect().height) : 76;
    page.style.setProperty('--ret-header-height', `${headerHeight}px`);
    page.style.setProperty('--ret-sticky-height', `${Math.ceil(sticky.getBoundingClientRect().height)}px`);
  };

  const getScrollOffset = () => (siteHeader?.offsetHeight || 76) + (sticky?.offsetHeight || 66) + 20;

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
    const position = window.scrollY + getScrollOffset();
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
        top: target.getBoundingClientRect().top + window.scrollY - getScrollOffset(),
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

  const filterButtons = [...page.querySelectorAll('.ret-rule-filters button')];
  const ruleRows = [...page.querySelectorAll('.ret-rule-table tbody tr')];
  const count = page.querySelector('.ret-rule-count');

  const filterRules = (category) => {
    let visible = 0;

    ruleRows.forEach((row) => {
      const show = category === 'Todas' || row.dataset.category === category;
      row.hidden = !show;
      row.classList.remove('ret-rule-enter');
      if (show) {
        row.style.setProperty('--ret-rule-delay', `${visible * 55}ms`);
        visible += 1;
      }
    });

    filterButtons.forEach((button) => {
      const active = button.dataset.category === category;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    if (count) {
      count.innerHTML = category === 'Todas'
        ? `<strong>${visible}</strong> reglas`
        : `<strong>${visible}</strong> en ${category}`;
    }

    if (!reducedMotion.matches) {
      requestAnimationFrame(() => {
        ruleRows.forEach((row) => {
          if (!row.hidden) row.classList.add('ret-rule-enter');
        });
      });
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => filterRules(button.dataset.category));
  });

  filterRules('General');

  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('ret-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    page.querySelectorAll('.ret-reveal').forEach((element) => observer.observe(element));
  } else {
    page.querySelectorAll('.ret-reveal').forEach((element) => element.classList.add('ret-visible'));
  }
})();
