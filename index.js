// 2nd
for (const curr_button of document.querySelectorAll('.beverage .remove-button')){
    curr_button.addEventListener('click', () => {curr_button.parentElement.remove();});
}