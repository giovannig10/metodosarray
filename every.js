// para que o every de true todos os itens devem satisfazer a minha condição
//no exemplo abaixo somente dois itens da lista satisfazem a condiçao proposta
//que no caso é ter uma idade maior que 40
let nomes = [
    { nome: "giovanni", idade: 15 },
    { nome: "livia", idade: 23 },
    { nome: "thales", idade: 27 },
    { nome: "jose", idade: 55 },
    { nome: "maris", idade: 47 },
];
let maior = nomes.every((maior) => {
    return maior.idade >= 40
});
console.log(maior);