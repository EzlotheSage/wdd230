// Function to toggle the navigation menu
function toggleMenu() {
    const navbarLinks = document.querySelector('.menu');
    navbarLinks.classList.toggle('active');
  }
  
  // Function to check if the small view media query is active
  function checkMediaQuery() {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    if (mediaQuery.matches) {
      navbarLinks.classList.add('active');
    } else {
      navbarLinks.classList.remove('active');
    }
  }
  
  // Check the media query on page load and whenever the window is resized
  window.addEventListener('load', checkMediaQuery);
  window.addEventListener('resize', checkMediaQuery);
  