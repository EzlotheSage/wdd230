// Get the current date and display it in the header
let dateElement = document.querySelector('.date');
let date = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = date.toLocaleDateString('en-US', options);

// Toggle the menu when the hamburger button is clicked
let hamburgerButton = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
hamburgerButton.addEventListener('click', function() {
  menu.classList.toggle('show');
});

// Get the current year and display it in the footer
let yearElement = document.querySelector('.year');
let currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Get the last modified date of the page and display it in the footer
let lastModifiedElement = document.querySelector('.last-modified');
let lastModified = document.lastModified;
lastModifiedElement.textContent = lastModified;

