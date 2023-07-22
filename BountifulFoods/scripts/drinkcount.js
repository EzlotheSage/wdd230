// Displays the number of drinks submitted by the user

const formSubmissionCount = localStorage.getItem('formSubmissionCount') || 0;
document.getElementById('form-submission-count').textContent = formSubmissionCount;