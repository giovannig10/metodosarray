//usamos este exemplo para saber quais sao os mais velhos da familia
//colocando um quesito para que aparecesse quem tem mais de 40 anos
//lembrando que no find so aparece o primeiro intem encontrado que esiver dentro da circunstancia proposta
let nomes = [
    { nome: "giovanni", idade: 15 },
    { nome: "livia", idade: 23 },
    { nome: "thales", idade: 27 },
    { nome: "jose", idade: 55 },
    { nome: "maris", idade: 47 },
];
let maior = nomes.find((maior) => {
    return maior.idade >= 40
});
console.log(maior);