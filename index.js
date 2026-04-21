// 2nd
for (const curr_button of document.querySelectorAll('.beverage .remove-button')){
    curr_button.addEventListener('click', () => {curr_button.parentElement.remove();});
}
const addButton = document.querySelector('.add-button');
const form = document.querySelector('form');

addButton.addEventListener('click', () => {
    const beverages = document.querySelectorAll('.beverage');
    const newIndex = beverages.length + 1;

    const lastBeverage = beverages[beverages.length - 1];
    const clone = lastBeverage.cloneNode(true);

    clone.querySelector('.beverage-count').textContent = `Напиток №${newIndex}`;

    const radios = clone.querySelectorAll('input[type="radio"]');
    let isFirst = false;
    radios.forEach(radio => {
        if (!isFirst) {
            radio.checked = true;
            isFirst = true;
        } else{
            radio.checked = false;
        }
        radio.name = `milk-${newIndex}`;
    });

    const checkboxes = clone.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);

    form.insertBefore(clone, addButton.parentElement);
});

let modal = document.getElementById("myModal");
let btn = document.querySelector('.submit-button');
let span = document.querySelector(".close");

btn.onclick = function(event) {
    event.preventDefault();

    const table = document.querySelector('.resultTable');

    const beverages = document.querySelectorAll('.beverage');

    beverages.forEach(bev => {
        const select = bev.querySelector('select');
        const drink = select.options[select.selectedIndex].textContent;

        const milkInput = bev.querySelector('input[type="radio"]:checked');

        const milk = milkInput
            ? milkInput.parentElement.querySelector('span').textContent
            : '';

        const checkboxes = bev.querySelectorAll('input[type="checkbox"]:checked');

        let extras = '';

        checkboxes.forEach(cb => {
            const labelText = cb.parentElement.querySelector('span').textContent;

            if (extras !== '') {
                extras += ', ';
            }
            extras += labelText;
        });

        const row = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.textContent = drink;

        const td2 = document.createElement('td');
        td2.textContent = milk;

        const td3 = document.createElement('td');
        td3.textContent = extras;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);

        table.appendChild(row);
    });

    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
