let nutritionData;
let formSubmissionCount = 0; // Initialize the form submission count

// Fetch the JSON data with available fruits from fruits.json
fetch('scripts/fruits.json')
  .then(response => response.json())
  .then(data => {
    nutritionData = data; // Set the fetched data to the global variable
    populateSelectOptions(); // Call a function to populate select options after fetching data
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to get the current form submission count from local storage
function getFormSubmissionCount() {
  const count = localStorage.getItem('formSubmissionCount');
  return count ? parseInt(count) : 0;
}

// Function to update and store the form submission count in local storage
function updateFormSubmissionCount(count) {
  localStorage.setItem('formSubmissionCount', count);
}

function populateSelectOptions() {
    // Get the select elements by ID
    const fruitSelect1 = document.getElementById('fruit-1');
    const fruitSelect2 = document.getElementById('fruit-2');
    const fruitSelect3 = document.getElementById('fruit-3');
  
    // Populate each select element with the available fruits
    nutritionData.forEach(fruit => {
      const option = document.createElement('option');
      option.value = fruit.name; // Use the correct property name that represents the fruit's name
      option.textContent = fruit.name; // Use the correct property name that represents the fruit's name
      fruitSelect1.appendChild(option.cloneNode(true));
      fruitSelect2.appendChild(option.cloneNode(true));
      fruitSelect3.appendChild(option.cloneNode(true));
    });
  }

document.getElementById('fruit-order-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Gather input values
  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit-1').value;
  const fruit2 = document.getElementById('fruit-2').value;
  const fruit3 = document.getElementById('fruit-3').value;
  const specialInstructions = document.getElementById('special-instructions').value;

  // Get the order date
  const orderDate = new Date().toLocaleDateString();

  // Calculate the total nutrition based on selected fruits
  const selectedFruits = [fruit1, fruit2, fruit3];
  let totalNutrition = { carbohydrates: 0, protein: 0, fat: 0, sugar: 0, calories: 0 };

  selectedFruits.forEach(fruit => {
    if (nutritionData.hasOwnProperty(fruit)) {
      totalNutrition.carbohydrates += nutritionData[fruit].carbohydrates;
      totalNutrition.protein += nutritionData[fruit].protein;
      totalNutrition.fat += nutritionData[fruit].fat;
      totalNutrition.sugar += nutritionData[fruit].sugar;
      totalNutrition.calories += nutritionData[fruit].calories;
    }
  });

  // Format the output
  const formattedOutput = `
    <h2>Order Summary</h2>
    <p><strong>Name:</strong> ${firstName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Order Date:</strong> ${orderDate}</p>
    <p><strong>Selected Fruits:</strong> ${selectedFruits.join(', ')}</p>
    <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
    <h3>Nutrition Information</h3>
    <p><strong>Total Carbohydrates:</strong> ${totalNutrition.carbohydrates}g</p>
    <p><strong>Total Protein:</strong> ${totalNutrition.protein}g</p>
    <p><strong>Total Fat:</strong> ${totalNutrition.fat}g</p>
    <p><strong>Total Sugar:</strong> ${totalNutrition.sugar}g</p>
    <p><strong>Total Calories:</strong> ${totalNutrition.calories} calories</p>
  `;

  // Increment the form submission count and update it in local storage
  formSubmissionCount++;
  updateFormSubmissionCount(formSubmissionCount);

  // Display the formatted output in the modal
  const modal = document.getElementById('modal');
  const modalContent = modal.querySelector('.modal-content');
  modalContent.innerHTML = formattedOutput;
  modal.style.display = 'block';

  // Reset the form after submission
  document.getElementById('fruit-order-form').reset();
});

// Close the modal when the close button is clicked
document.getElementById('modal-close').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});
