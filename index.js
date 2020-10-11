let numero = prompt("Insira um número para ver sua tabuada");

let i = 1;
while (i <= 10) {
    let resultado = Number(numero) * i;
    alert(`${numero} x ${i} = ${resultado}`);
    i++;
}