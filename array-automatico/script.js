console.log("Usando o forEach", "--------------------------------------------------------");

dados.forEach(
    (elemento) => {
        console.log(elemento.nome);
    }
);

console.log("Usando o while", "-------------------------------------");

let indice = 0;

while (indice < dados.length){
    console.log("A posição de", dados[indice].nome, "é", dados[indice].posicao)
    indice++;
};

console.log("Usando o for", "----------------------------------------");


for (let indice = 0; indice < dados.length; indice++){
    console.log("A altura de", dados[indice].nome, "é", dados[indice].altura)
};

console.log("Usando for...of", "--------------------------------");
for (const element of dados){
    console.log(element.nome_completo);
};

//const atleta = dados[15];

const container = document.getElementById("conteudo");

dados.forEach(
    (atleta) => {
        container.innerHTML += `
    <div class="card">
        <img src=${atleta.imagem} alt='foto de ${atleta.nome}'>
        <p class="posicao">${atleta.posicao}</p>
        <p class="nome">${atleta.nome}</p>
        <p class="descri">${atleta.descricao}</p>
        <p class="nascimento">${atleta.nascimento}</p>
    </div>


`;

    }
)




