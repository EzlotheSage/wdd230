// Get the last modified date of the HTML file
const lastModifiedDate = new Date(document.lastModified);

// Format the date as desired (e.g., "May 16, 2023")
const formattedDate = lastModifiedDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// Get the last modified element and update its content
const lastModifiedElement = document.querySelector('.last-modified');
lastModifiedElement.textContent = formattedDate;