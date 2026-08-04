// =====================================================================
// RUTA DEL TOROGOZ — script.js
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- 1. Menú hamburguesa (móvil) ----------
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Cierra el menú al hacer clic en un link (útil en móvil)
    primaryNav.querySelectorAll('.main-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- 2. Marca automáticamente el link activo del menú ----------
  // Compara el archivo de la URL actual con el href de cada link,
  // así la línea verde de abajo siempre aparece bajo la página en la
  // que estás (Inicio, Nosotros, Galería o Lugares), sin tocar el HTML.
  const links = document.querySelectorAll('.main-nav__link');
  let currentPage = location.pathname.split('/').pop();
  if (currentPage === '') currentPage = 'index.html'; // si la ruta es la raíz "/"

  links.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('main-nav__link--active');
    } else {
      link.classList.remove('main-nav__link--active');
    }
  });

});