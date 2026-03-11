const cards = document.querySelectorAll('.cards');

cards.forEach(card => {
    const btnAdd = card.querySelector('.btn-add');
    const btnRemove = card.querySelector('.btn-remove');
    const display = card.querySelector('.valor-contador');
    
    let unidades = 0;

    btnAdd.addEventListener('click', () => {
        if (unidades < 10) {
            unidades++;
            display.innerText = unidades;
        }
    });

    btnRemove.addEventListener('click', () => {
        if (unidades > 0) {
            unidades--;
            display.innerText = unidades;
        }
    });
});