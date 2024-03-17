//usamos esse array para encontrar em que posiçao estava um clube italiano que no caso é o palmeiras
let times = [
    { nome: "palmeiras", gols: 28, jogos: 38 },
    { nome: "santos", gols: 20, jogos: 38 },
    { nome: "flamengo", gols: 35, jogos: 38 },
    { nome: "gremio", gols: 20, jogos: 38 },
    { nome: "juventus", gols: 48, jogos: 38 },
];
let clubeItaliano = times.findIndex((equipe) => {
    return equipe.nome == "palmeiras"
});
console.log(clubeItaliano);