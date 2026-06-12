(() => {
  const page = document.querySelector('.vc-page');
  if (!page) return;

  const sectionPage = document.querySelector('.section-page');
  if (sectionPage) sectionPage.style.overflow = 'visible';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) return;

  const stages = [...page.querySelectorAll('.vc-stage')];
  const flowItems = [...page.querySelectorAll('.vc-flow-list li')];
  const final = page.querySelector('.vc-final-inner');

  const revealDirections = [
    'vc-reveal-left',
    'vc-reveal-right',
    'vc-reveal-up',
    'vc-reveal-left',
    'vc-reveal-right',
    'vc-reveal-up',
  ];

  stages.forEach((stage, index) => stage.classList.add(revealDirections[index]));
  flowItems.forEach((item, index) => {
    item.classList.add('vc-reveal-up');
    item.style.setProperty('--vc-delay', `${index * 55}ms`);
  });
  if (final) final.classList.add('vc-reveal-up');

  const revealItems = [...stages, ...flowItems];
  if (final) revealItems.push(final);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('vc-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -45px 0px' });

  revealItems.forEach((item) => observer.observe(item));
})();
