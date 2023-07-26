const menuItems = document.getElementById("menu-items");

// Function to toggle the visibility of the menu items
function toggleMenuItems() {
  menuItems.classList.toggle("visible");
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
    menuItems.classList.remove("visible"); // Hide menu items if button is shown
  } else {
    menuButton.style.display = "none";
    menuItems.classList.add("visible"); // Show menu items if button is hidden
  }
}

// Initial check for screen width
checkScreenWidth();

// Add event listener for screen width changes
window.addEventListener("resize", checkScreenWidth);

// Create menu button if needed
createMenuButton();
