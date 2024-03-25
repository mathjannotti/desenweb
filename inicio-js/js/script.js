let a = 4;

function minhaFunc(par1){
    return 'texto: ' + par1;
}

const lista = [3,4,5,'nada',[4,6]];

console.log(++a);
console.log(a);
console.log(a**2);

const meuObjeto = {
    propriedade1: 'tudo'
  }

console.log(minhaFunc('nada não'))


// EXERCÍCIOS INTRODUÇÃO AO JAVASCRIPT

// Exemplo utilizando var
var x = 10;
if (true) {
    var x = 20;
    console.log(x); // Saída: 20
}
console.log(x); // Saída: 20


// Exemplo utilizando let
let y = 10;
if (true) {
    let y = 20;
    console.log(y); // Saída: 20
}
console.log(y); // Saída: 10


// Exemplo utilizando const
const z = 10;
if (true) {
    const z = 20;
    console.log(z); // Saída: 20
}
console.log(z); // Saída: 10

// CRIA ARRAY
let meuArray = [1, 2, 3, 4, 5];

// LENGTH -> VER TAMANHO DO ARRAY
console.log("Tamanho do array:", meuArray.length); // Saída: 5

// RECUPERAR ELEMENTO PELO ÍNDICE
console.log("Elemento no índice 2:", meuArray[2]); // Saída: 3

// INCLUI ELEMENTO COM POSIÇÃO ESPECÍFICA
meuArray[5] = 6;
console.log("Array após a inclusão:", meuArray); // Saída: [1, 2, 3, 4, 5, 6]

// PUSH -> ADICIONA NO FINAL DO ARRAY
meuArray.push(7);
console.log("Array após push:", meuArray); // Saída: [1, 2, 3, 4, 5, 6, 7]

// POP -> REMOVE ÚLTIMO ELEMENTO DO ARRAY
let removedElement = meuArray.pop();
console.log("Array após pop:", meuArray); // Saída: [1, 2, 3, 4, 5, 6]
console.log("Elemento removido:", removedElement); // Saída: 7

// SHIFT -> TIRA PRIMEIRO ELEMENTO
let shiftedElement = meuArray.shift();
console.log("Array após shift:", meuArray); // Saída: [2, 3, 4, 5, 6]
console.log("Elemento removido pelo shift:", shiftedElement); // Saída: 1

// UNSHIFT -> ADICIONA COMO PRIMEIRO ELEMENTO
meuArray.unshift(0);
console.log("Array após unshift:", meuArray); // Saída: [0, 2, 3, 4, 5, 6]
