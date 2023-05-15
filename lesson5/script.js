document.addEventListener("DOMContentLoaded", () => {

    const list = document.querySelector('#list');
    const input = document.querySelector('#favchap');
    const button = document.querySelector('#input');

    button.addEventListener('click', () => {
        const myItem = input.value;
        

        if (myItem.trim() !=='') {
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.innerHTML = '<span class="delete-symbol">&#x274C;</span>';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.focus();
        input.value = '';
        }
    });

})