const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  
    displayProphets(data.prophets);
}

  
  getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
            card.classList.add('card');
        let h2 = document.createElement('h2'); 
        let date = document.createElement('p');
        let birthplace = document.createElement('p');
        let portrait = document.createElement('img');

        h2.textContent = (prophet.name + " " + prophet.lastname);
        date.textContent = ("Date of Birth: " + prophet.birthdate);
        birthplace.textContent = ("Place of birth: " + prophet.birthplace);

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'Portrait of ' + prophet.name);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(date);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);

    })
}