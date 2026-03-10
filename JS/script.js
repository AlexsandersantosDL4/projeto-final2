const btnMais = document.getElementById('botao-mais');
const btnMenos = document.getElementById('botao-menos');
const displayQuantidade = document.getElementById('quantidade');

let contador = 0;

btnMais.addEventListener('click', () => {
    
    if (contador < 10) {
        contador = contador + 1;
        atualizarTela();
    } else {
        console.log("Limite máximo de 10 atingido");
    }
});

// Lógica para Diminuir
btnMenos.addEventListener('click', () => {
    // SÓ diminui SE o contador for maior que 0
    if (contador > 0) {
        contador = contador - 1;
        atualizarTela();
    } else {
        console.log("Limite mínimo de 0 atingido");
    }
});

function atualizarTela() {
    displayQuantidade.innerText = contador;
}