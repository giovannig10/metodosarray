//desta vez o metodo foi usado paar somar as idades da familia, desta forma temos o toltal no final
let nomes = [
    { nome: "giovanni", idade: 15 },
    { nome: "livia", idade: 23 },
    { nome: "thales", idade: 27 },
    { nome: "jose", idade: 55 },
    { nome: "maris", idade: 47 },
];
let totalIdades = nomes.reduce((total, idades) => {
    return total += idades.idade
}, 0);
console.log(totalIdades); 