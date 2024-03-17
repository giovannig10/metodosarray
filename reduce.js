//neste exemplo usamos o metodo reduce para somar o tatal de gols feitos por todas as equipes da lista
let times = [
    { nome: "palmeiras", gols: 28, jogos: 38 },
    { nome: "santos", gols: 20, jogos: 38 },
    { nome: "flamengo", gols: 35, jogos: 38 },
    { nome: "gremio", gols: 20, jogos: 38 },
    { nome: "juventus", gols: 48, jogos: 38 },
];
let totalGols = times.reduce((total, equipes) => {
    return total += equipes.gols
}, 0);
console.log(totalGols);