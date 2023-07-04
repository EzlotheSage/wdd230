// Fetch the JSON data
fetch('scripts/data.json')
    .then(response => response.json())
    .then(data => {
        // Get the array of companies from the JSON data
        const companiesArray = data.companies;

        // Generate two random indices
        const randomIndex1 = Math.floor(Math.random() * companiesArray.length);
        let randomIndex2;
        do {
            randomIndex2 = Math.floor(Math.random() * companiesArray.length);
        } while (randomIndex2 === randomIndex1);

        // Get the random companies
        const randomCompany1 = companiesArray[randomIndex1];
        const randomCompany2 = companiesArray[randomIndex2];

        // Display the random companies in the HTML elements
        const spotlight1 = document.querySelector('.spotlight1');
        spotlight1.querySelector('h2').textContent = randomCompany1.name;
        spotlight1.querySelector('p').innerHTML = `
            Address: ${randomCompany1.address}<br>
            Phone: ${randomCompany1.phone}<br>
            Website: <a href="${randomCompany1.website}">${randomCompany1.website}</a><br>
            Membership Level: ${randomCompany1.membership_level}<br>
            <img src="./images/${randomCompany1.image}" alt="${randomCompany1.name} Image">
        `;

        const spotlight2 = document.querySelector('.spotlight2');
        spotlight2.querySelector('h2').textContent = randomCompany2.name;
        spotlight2.querySelector('p').innerHTML = `
            Address: ${randomCompany2.address}<br>
            Phone: ${randomCompany2.phone}<br>
            Website: <a href="${randomCompany2.website}">${randomCompany2.website}</a><br>
            Membership Level: ${randomCompany2.membership_level}<br>
            <img src="${randomCompany2.image}" alt="${randomCompany2.name} Image">
        `;
    })
    .catch(error => {
        console.log('Error:', error);
    });
