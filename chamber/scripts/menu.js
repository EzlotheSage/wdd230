const menuItems = document.getElementById("menu-items");
let menuVisible = false; // Track the menu visibility state

// Function to toggle the visibility of the menu items
function toggleMenuItems() {
  /* console.log('test') */
  if (!menuVisible) {
    // Show the menu items
    menuItems.style.maxHeight = menuItems.scrollHeight + "px";
  } else {
    // Hide the menu items
    menuItems.style.maxHeight = 50; // Reset max-height to remove the transition effect
  }
  menuVisible = !menuVisible; // Toggle the menu visibility state
}

// Function to create the menu button and attach event listener
function createMenuButton() {
  const menuButton = document.createElement("button");
  menuButton.textContent = "\u2630"; // Hamburger icon (Unicode character)
  menuButton.id = "menu-button";
  document.body.appendChild(menuButton);

  // Attach click event listener to the menu button
  menuButton.addEventListener("click", toggleMenuItems);
}

// Function to check the screen width and show/hide the menu button
function checkScreenWidth() {
  const menuButton = document.getElementById("menu-button");

  if (window.matchMedia("(max-width: 600px)").matches) {
    menuButton.style.display = "block";
    menuItems.style.maxHeight = null; // Reset max-height when the screen size changes
  } else {
    menuButton.style.display = "none";
    menuItems.style.maxHeight = "none"; // Show the menu items by default when screen size is larger
  }
}

// Initial check for screen width
checkScreenWidth();

// Add event listener for screen width changes
window.addEventListener("resize", checkScreenWidth);

// Create menu button if needed
createMenuButton();
