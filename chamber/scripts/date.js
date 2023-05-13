const dateElem = document.querySelector('.date');
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const today = new Date();

dateElem.textContent = today.toLocaleDateString('en-US', options);
