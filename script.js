// ---- header scroll state ----
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---- mobile nav ----
const mnav = document.querySelector('.mobile-nav');
document.querySelector('.menu-btn').addEventListener('click', () => mnav.classList.add('open'));
document.querySelector('.mobile-nav .close').addEventListener('click', () => mnav.classList.remove('open'));
mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mnav.classList.remove('open')));

// ---- reveal on scroll ----
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---- FAQ accordion ----
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => {
      o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!open) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
  });
});

// ---- form (demo, no backend) ----
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type=submit]');
  btn.textContent = 'Dank je wel — we nemen contact op';
  btn.disabled = true;
  form.reset();
});
