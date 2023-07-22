//shows last modified date of webpage in footer
// lastModified.js

document.addEventListener('DOMContentLoaded', function () {

    // Function to format the date to a readable format
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

    // Function to update the "last modified" date on the page
    function updateLastModified() {
        const lastModifiedElement = document.getElementById('last-modified');
        const lastModifiedDate = new Date(document.lastModified);
        lastModifiedElement.textContent = `Last Modified: ${formatDate(lastModifiedDate)}`;
    }

    // Call the function to update the "last modified" date when the page loads
    updateLastModified();
});
