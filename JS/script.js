const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() =>{
        count += 1;
        updateValue();
    }, 100);

});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() =>{
        count -= 1;
        updateValue();
    }, 100);

});

document.addEventListener('mouseup', () => clearInterval (intervalId));

// segundo

const valor = document.getElementById('valuor');
const maisButton = document.getElementById('mais');
const menosButton = document.getElementById('menos');

const updateValor = () => {
    valor.innerHTML = count;
};

let conta = 0;
let intervaloIdo = 0;

maisButton.addEventListener('mousedown', () => {
    intervalIdo = setInterval(() =>{
        conta += 1;
        updateValor();
    }, 100);

});

menosButton.addEventListener('mousedown', () => {
    intervalIdo = setInterval(() =>{
        conta -= 1;
        updateValor();
    }, 100);

});

document.addEventListener('mouseup', () => clearInterval (intervalIdo));
// terceiro

const valo = document.getElementById('valo');
const masButton = document.getElementById('mas');
const menusButton = document.getElementById('menus');

const updateValo = () => {
    valo.innerHTML = count;
};

let contra = 0;
let intervalIda = 0;

masButton.addEventListener('mousedown', () => {
    intervalIda = setInterval(() =>{
        contra += 1;
        updateValue();
    }, 100);

});

menusButton.addEventListener('mousedown', () => {
    intervalIda = setInterval(() =>{
        contra -= 1;
        updateValue();
    }, 100);

});

document.addEventListener('mouseup', () => clearInterval (intervalIda));

// quarto
const valu = document.getElementById('valu');
const pluButton = document.getElementById('plu');
const minuButton = document.getElementById('minu');

const updateValu = () => {
    valu.innerHTML = count;
};

let countado = 0;
let intervalIdu = 0;

pluButton.addEventListener('mousedown', () => {
    intervalIdu = setInterval(() =>{
        countado += 1;
        updateValu();
    }, 100);

});

minuButton.addEventListener('mousedown', () => {
    intervalIdu = setInterval(() =>{
        countado -= 1;
        updateValue();
    }, 100);

});

document.addEventListener('mouseup', () => clearInterval (intervalIdu));
