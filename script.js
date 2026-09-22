// Load Ikon Feather
feather.replace();

// Responsive Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

if (hamburger) {
  hamburger.onclick = (e) => {
    e.preventDefault();
    navbarNav.classList.toggle('active');
  };
}

// Klik di luar menu untuk menutup navbar mobile
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});