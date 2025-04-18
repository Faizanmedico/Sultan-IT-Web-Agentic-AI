document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
      menuToggle.addEventListener('click', function() {
          nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
      });
  }

  // Agar aap koi aur JavaScript functionality add karna chahte hain toh yahan likhen
});