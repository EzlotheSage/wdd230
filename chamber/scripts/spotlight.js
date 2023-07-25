// Fetch the JSON data
fetch('scripts/data.json')
    .then(response => response.json())
    .then(data => {
        // Get the array of companies from the JSON data
        const companiesArray = data.companies;

        // Generate three random indices
        const randomIndex1 = Math.floor(Math.random() * companiesArray.length);
        let randomIndex2, randomIndex3;
        do {
            randomIndex2 = Math.floor(Math.random() * companiesArray.length);
        } while (randomIndex2 === randomIndex1);

        do {
            randomIndex3 = Math.floor(Math.random() * companiesArray.length);
        } while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2);

        // Get the random companies
        const randomCompany1 = companiesArray[randomIndex1];
        const randomCompany2 = companiesArray[randomIndex2];
        const randomCompany3 = companiesArray[randomIndex3];

        // Display the random companies in the HTML elements
        const spotlight1 = document.querySelector('.spotlight1');
        spotlight1.querySelector('h2').textContent = randomCompany1.name;
        spotlight1.querySelector('p').innerHTML = `
            Address: ${randomCompany1.address}<br>
            Phone: ${randomCompany1.phone}<br>
            Website: <a href="${randomCompany1.website}">${randomCompany1.website}</a><br>
            Membership Level: ${randomCompany1.membership_level}<br>
            <img src="/images/${randomCompany1.image}" alt="${randomCompany1.name} Image">
        `;

        const spotlight2 = document.querySelector('.spotlight2');
        spotlight2.querySelector('h2').textContent = randomCompany2.name;
        spotlight2.querySelector('p').innerHTML = `
            Address: ${randomCompany2.address}<br>
            Phone: ${randomCompany2.phone}<br>
            Website: <a href="${randomCompany2.website}">${randomCompany2.website}</a><br>
            Membership Level: ${randomCompany2.membership_level}<br>
            <img src="/images/${randomCompany2.image}" alt="${randomCompany2.name} Image">
        `;

        const spotlight3 = document.querySelector('.spotlight3');
        spotlight3.querySelector('h2').textContent = randomCompany3.name;
        spotlight3.querySelector('p').innerHTML = `
            Address: ${randomCompany3.address}<br>
            Phone: ${randomCompany3.phone}<br>
            Website: <a href="${randomCompany3.website}">${randomCompany3.website}</a><br>
            Membership Level: ${randomCompany3.membership_level}<br>
            <img src="/images/${randomCompany3.image}" alt="${randomCompany3.name} Image">
        `;
    })
    .catch(error => {
        console.log('Error:', error);
    });
