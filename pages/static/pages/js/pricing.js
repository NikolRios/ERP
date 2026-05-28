document.querySelectorAll('.billing-toggle, .plan-tabs').forEach(group => {
  group.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;

    group.querySelectorAll('button').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});

document.querySelectorAll('.pricing-cards').forEach(group => {
  const cards = group.querySelectorAll('.plan-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      group.classList.add('hovering');
      cards.forEach(item => item.classList.toggle('is-hovered', item === card));
    });
  });

  group.addEventListener('mouseleave', () => {
    group.classList.remove('hovering');
    cards.forEach(card => card.classList.remove('is-hovered'));
  });
});
