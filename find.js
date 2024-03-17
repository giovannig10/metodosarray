//o find vai percorrer todo o array
//e o primeiro item que ele encontrar ele devolve com base na circunstancia que eu passei
let times = [
    { nome: "palmeiras", gols: 28, jogos: 38 },
    { nome: "santos", gols: 20, jogos: 38 },
    { nome: "flamengo", gols: 35, jogos: 38 },
    { nome: "gremio", gols: 20, jogos: 38 },
    { nome: "juventus", gols: 48, jogos: 38 },
];
let maior = times.find((maior) => {
    return maior.gols >= 29
});
console.log(maior);