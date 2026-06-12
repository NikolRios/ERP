(() => {
  const page = document.querySelector('.com-page');
  if (!page) return;

  const sectionPage = document.querySelector('.section-page');
  if (sectionPage) sectionPage.style.overflow = 'visible';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) return;

  const revealItems = [
    ...page.querySelectorAll('.com-module-copy'),
    ...page.querySelectorAll('.com-flow-card'),
    ...page.querySelectorAll('.com-flow li'),
    ...page.querySelectorAll('.com-final-inner'),
  ];

  page.querySelectorAll('.com-flow').forEach((flow) => {
    flow.querySelectorAll('li').forEach((item, index) => {
      item.style.setProperty('--com-delay', `${index * 70}ms`);
    });
  });

  revealItems.forEach((item) => item.classList.add('com-reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('com-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });

  revealItems.forEach((item) => observer.observe(item));
})();
