document.addEventListener('DOMContentLoaded', function () {
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
      formSubmissionCount = count; // Update the formSubmissionCount var
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
  
    // Function to hide the modal
    function hideModal() {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
    }
  
    // Function to show the modal and set its content
    function displayModal(formattedOutput) {
      // Display the formatted output in the modal
      const modal = document.getElementById('modal');
      const modalContent = modal.querySelector('.modal-content');
    
      // Create a close button element
      const closeButton = document.createElement('span');
      closeButton.classList.add('close');
      closeButton.textContent = '×'; // Use '×' for a close symbol
    
      // Add an event listener to the close button to hide the modal when clicked
      closeButton.addEventListener('click', hideModal);
    
      // Append the close button and formatted output to the modal content
      modalContent.innerHTML = ''; // Clear any previous content
      modalContent.appendChild(closeButton);
      modalContent.insertAdjacentHTML('beforeend', formattedOutput);
    
      // Show the modal
      modal.style.display = 'block';
    }
  
    // Event listener to close the modal when clicking on the overlay
    const modalOverlay = document.getElementById('modal');
    modalOverlay.addEventListener('click', function (event) {
      if (event.target === modalOverlay) {
        hideModal();
      }
    });
  
    // Event listener to close the modal when the "Escape" key is pressed
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        hideModal();
      }
    });
  
    document.getElementById('place-order-button').addEventListener('click', function () {
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
        const selectedFruitData = nutritionData.find(item => item.name === fruit);
        if (selectedFruitData) {
            totalNutrition.carbohydrates += selectedFruitData.nutritions.carbohydrates;
            totalNutrition.protein += selectedFruitData.nutritions.protein;
            totalNutrition.fat += selectedFruitData.nutritions.fat;
            totalNutrition.sugar += selectedFruitData.nutritions.sugar;
            totalNutrition.calories += selectedFruitData.nutritions.calories;
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
    
      displayModal(formattedOutput);
  
      // Increment the form submission count and update it in local storage
      formSubmissionCount++;
      updateFormSubmissionCount(formSubmissionCount);
    
      // Update the form submission count on the page
      document.getElementById('form-submission-count').textContent = formSubmissionCount;
    
      // Reset the form after submission
      document.getElementById('fruit-order-form').reset();
    });
  
  });
  