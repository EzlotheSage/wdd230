// Fetch the JSON data with available fruits from fruits.json




fetch('fruits.json')
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
.catch(error => console.error('Error fetching data:', error));