const valor = getElementsByClassName('numero');
const somar = getElementsByClassName('soma');
const sub = getElementsByClassName('sub');

let numero = 0;
let intervaloclass = 0;

somar.addeventlistener('mousedown', () => {
    intervaloclass = setintervalo(() => { 
        count += 1;
        updateValor();  


    }, 100);


});
document.addEventListener('mouseup', () => cle)