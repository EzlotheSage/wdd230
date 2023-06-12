// Fetch the JSON data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element to append the company cards
    const container = document.getElementById("company-cards");

    // Loop through each company and create a card for each
    data.companies.forEach(company => {
      // Create card elements
      const card = document.createElement("div");
      card.classList.add("card");

      const nameElement = document.createElement("h3");
      nameElement.textContent = company.name;

      const addressElement = document.createElement("p");
      addressElement.textContent = `Address: ${company.address}`;

      const phoneElement = document.createElement("p");
      phoneElement.textContent = `Phone: ${company.phone}`;

      const websiteElement = document.createElement("p");
      websiteElement.innerHTML = `Website: <a href="http://${company.website}" target="_blank">${company.website}</a>`;

      const imageElement = document.createElement("img");
      imageElement.src = company.image;
      imageElement.alt = company.name;
      imageElement.style.width = "100px";

      const membershipElement = document.createElement("p");
      membershipElement.textContent = `Membership Level: ${company.membership_level}`;

      // Append elements to the card
      card.appendChild(nameElement);
      card.appendChild(addressElement);
      card.appendChild(phoneElement);
      card.appendChild(websiteElement);
      card.appendChild(imageElement);
      card.appendChild(membershipElement);

      // Append the card to the container
      container.appendChild(card);
    });
  })
  .catch(error => console.error(error));
