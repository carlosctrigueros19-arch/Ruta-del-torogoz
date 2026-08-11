// =====================================================================
// RUTA DEL TOROGOZ — scrip.js
// =====================================================================

// ---------- 0. Siempre empezar arriba de la página ----------
// Por defecto, el navegador recuerda en qué parte de la página estabas
// (por ejemplo, cerca del footer) y te devuelve a ese mismo punto al
// volver con "Regresar" o con el botón atrás del navegador. Con esto
// forzamos que CUALQUIER página del sitio siempre te reciba desde
// arriba, y que si quieres volver a bajar, lo hagas tú manualmente.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('pageshow', () => {
  window.scrollTo(0, 0);
});

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
  // Compara el archivo de la URL actual con el archivo al que apunta
  // cada link, así la línea verde de abajo siempre aparece bajo la
  // página en la que estás (Inicio, Nosotros, Galería o Lugares), sin
  // tocar el HTML.
  //
  // 👉 Antes se comparaba link.getAttribute('href') tal cual estaba
  // escrito en el HTML contra el nombre de archivo de la URL. Si el
  // href no coincidía carácter por carácter (mayúsculas, "./", etc.)
  // la comparación fallaba en silencio y el link nunca se marcaba
  // como activo. Por eso solo "funcionaba" en index.html.
  //
  // Ahora usamos link.pathname: el navegador ya resuelve el href a una
  // ruta real (sin importar cómo esté escrito), así que la comparación
  // es mucho más confiable.
  const links = document.querySelectorAll('.main-nav__link');

  let currentFile = location.pathname.split('/').pop().toLowerCase();
  if (currentFile === '') currentFile = 'index.html';

  links.forEach(link => {
    let linkFile = link.pathname.split('/').pop().toLowerCase();
    if (linkFile === '') linkFile = 'index.html';

    link.classList.toggle('main-nav__link--active', linkFile === currentFile);
  });

});  