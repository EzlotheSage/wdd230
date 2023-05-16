// Get the current day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
const currentDay = new Date().getDay();

// Get the banner element
const banner = document.getElementById('banner');

// Check if it's Monday (1) or Tuesday (2)
if (currentDay === 1 || currentDay === 2) {
  // Set the banner text
  banner.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
} else {
  // If it's not Monday or Tuesday, hide the banner
  banner.style.display = 'none';
}
