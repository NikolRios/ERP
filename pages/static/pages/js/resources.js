(() => {
  const menus = [
    { menu: document.querySelector('.resources-menu'), thumb: document.querySelector('.resources-menu-thumb') },
    { menu: document.querySelector('.features-jump'), thumb: document.querySelector('.features-jump-thumb') },
    { menu: document.querySelector('.segments-jump'), thumb: document.querySelector('.segments-jump-thumb') },
    { menu: document.querySelector('.support-jump'), thumb: document.querySelector('.support-jump-thumb') },
  ].filter(({ menu }) => menu);

  menus.forEach(({ menu, thumb }) => {
    const menuLinks = [...menu.querySelectorAll('a')];
    const sections = menuLinks
      .map((link) => {
        const id = link.getAttribute('href');
        return id ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    if (!menuLinks.length || !sections.length) return;

    const byId = new Map(menuLinks.map((link) => [link.getAttribute('href').slice(1), link]));
    let currentActiveId = null;

    const moveThumb = (target) => {
      if (!thumb || !target) return;
      const menuRect = menu.getBoundingClientRect();
      const rect = target.getBoundingClientRect();
      const x = rect.left - menuRect.left;
      thumb.style.width = `${rect.width}px`;
      thumb.style.transform = `translate(${x}px, -50%)`;
    };

    const setActive = (id, fromUserClick = false) => {
      if (!id || id === currentActiveId) return;
      currentActiveId = id;
      menuLinks.forEach((link) => link.classList.remove('active'));
      const target = byId.get(id);
      if (target) {
        target.classList.add('active');
        moveThumb(target);
        if (fromUserClick) {
          target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }
    };

    const getCurrentSectionId = () => {
      const anchor = 180;
      const orderedSections = [...sections].sort((a, b) => a.offsetTop - b.offsetTop);
      let currentId = orderedSections[0].id;

      for (const section of orderedSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= anchor) currentId = section.id;
      }

      return currentId;
    };

    const onScroll = () => setActive(getCurrentSectionId(), false);

    menuLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        setActive(link.getAttribute('href').slice(1), true);
        const y = target.getBoundingClientRect().top + window.scrollY - 170;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      onScroll();
      const active = menu.querySelector('a.active');
      if (active) moveThumb(active);
    });

    onScroll();
  });
})();

// Guide index active link tracking
(() => {
  const index = document.querySelector('.guide-index');
  if (!index) return;

  const indexLinks = [...index.querySelectorAll('a')];
  if (!indexLinks.length) return;

  const stepSections = indexLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const setIndexActive = (id) => {
    indexLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  };

  const onScroll = () => {
    const anchor = 200;
    let currentId = stepSections[0]?.id;
    for (const section of stepSections) {
      if (section.getBoundingClientRect().top <= anchor) currentId = section.id;
    }
    if (currentId) setIndexActive(currentId);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
