let nutritionData;

// Fetch the JSON data with available fruits from fruits.json

fetch('scripts/fruits.json')
.then(response => response.json())
.then(data => {
  // Get the select elements by ID
  const fruitSelect1 = document.getElementById('fruit-1');
  const fruitSelect2 = document.getElementById('fruit-2');
  const fruitSelect3 = document.getElementById('fruit-3');

  // Populate each select element with the available fruits
  data.forEach(fruit => {
    const option = document.createElement('option');
    option.value = fruit;
    option.textContent = fruit;
    fruitSelect1.appendChild(option.cloneNode(true));
    fruitSelect2.appendChild(option.cloneNode(true));
    fruitSelect3.appendChild(option.cloneNode(true));
  });
})
.catch(error => console.error('Error fetching data:', error));// script.js

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

  // Example nutrition data source with information per fruit
  const nutritionData = {
    'Apple': { carbohydrates: 25, protein: 1, fat: 0, sugar: 19, calories: 95 },
    'Banana': { carbohydrates: 27, protein: 1, fat: 0, sugar: 14, calories: 105 },
    'Orange': { carbohydrates: 12, protein: 1, fat: 0, sugar: 9, calories: 62 },
    // Add more fruits and their nutrition data here...
  };

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

  // Display the formatted output in the 'output' div
  document.getElementById('output').innerHTML = formattedOutput;
});
