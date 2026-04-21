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