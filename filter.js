//o filter percoore o array e devolve uma lista dos itens que ele encontrar
//com base nas condiçoes que eu pedi
let times = [
    { nome: "palmeiras", gols: 28, jogos: 80 },
    { nome: "santos", gols: 20, jogos: 45 },
    { nome: "flamengo", gols: 35, jogos: 70 },
    { nome: "gremio", gols: 20, jogos: 50 },
    { nome: "juventus", gols: 48, jogos: 40 },
];
let maior = times.filter((maior) => {
    return maior.jogos >= 60
});
console.log(maior);