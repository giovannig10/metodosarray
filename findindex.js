// o findIndex vai servir para que nós possamos encontrar a posição de um item dentro do array
let nomes = [
    { nome: "giovanni", idade: 15 },
    { nome: "livia", idade: 23 },
    { nome: "thales", idade: 27 },
    { nome: "jose", idade: 55 },
    { nome: "maris", idade: 47 },
];
let identidade = nomes.findIndex((user) => {
    return user.nome == "giovanni"
});
console.log(identidade);