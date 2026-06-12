(() => {
  const page = document.querySelector('.log-page');
  if (!page) return;

  const sectionPage = document.querySelector('.section-page');
  if (sectionPage) sectionPage.style.overflow = 'visible';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) return;

  const sections = [...page.querySelectorAll('.log-section')];
  const flowItems = [...page.querySelectorAll('.log-flow-list li')];
  const final = page.querySelector('.log-final-inner');

  sections.forEach((section) => {
    section.classList.add(section.classList.contains('log-section-right')
      ? 'log-reveal-right'
      : 'log-reveal-left');
  });

  flowItems.forEach((item, index) => {
    item.classList.add('log-reveal-up');
    item.style.setProperty('--log-delay', `${index * 55}ms`);
  });

  if (final) final.classList.add('log-reveal-up');

  const revealItems = [...sections, ...flowItems];
  if (final) revealItems.push(final);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('log-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -45px 0px' });

  revealItems.forEach((item) => observer.observe(item));
})();
