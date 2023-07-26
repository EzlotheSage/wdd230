const menuItems = document.getElementById("menu-items");
const menuButton = document.getElementById("menu-button");
let menuVisible = false; // Track the menu visibility state

// Function to toggle the visibility of the menu items
function toggleMenuItems() {
  if (!menuVisible) {
    // Show the menu items
    menuItems.style.maxHeight = menuItems.scrollHeight + "px";
  } else {
    // Hide the menu items
    menuItems.style.maxHeight = null; // Reset max-height to remove the transition effect
  }
  menuVisible = !menuVisible; // Toggle the menu visibility state
}

// Attach click event listener to the menu button
menuButton.addEventListener("click", toggleMenuItems);

// Function to check the screen width and show/hide the menu button
function checkScreenWidth() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    menuButton.style.display = "block";
    menuItems.style.maxHeight = null; // Reset max-height when the screen size changes
  } else {
    menuButton.style.display = "none";
    menuItems.style.maxHeight = "none"; // Show the menu items by default when the screen size is larger
  }
}

// Initial check for screen width
checkScreenWidth();

// Add event listener for screen width changes
window.addEventListener("resize", checkScreenWidth);
