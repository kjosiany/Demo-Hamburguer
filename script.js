const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.food-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    tabs.forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    cards.forEach(card => {
      card.classList.toggle('hidden', card.dataset.category !== filter);
    });
  });
});

// Make the header slightly more compact after scrolling.
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });


document.querySelectorAll('.order-product').forEach(link => {
  link.addEventListener('click', () => {
    const product = link.dataset.product || 'um pedido';
    const message = `Olá! Vim pelo site da Brasa de Vila e quero pedir: ${product}.`;
    link.href = `https://wa.me/5534999990000?text=${encodeURIComponent(message)}`;
  });
});
