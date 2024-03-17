//no exemplo abaixo o resultado é true, diferente so exemplo 1 
//pois desta vez todos os jogadores tem 1 ou mais gols
//que no caso é a condição proposta 
let jogadores = [
    { nome: "giovanni", gols: 2, jogos: 8 },
    { nome: "vinicius", gols: 4, jogos: 10 },
    { nome: "vitor", gols: 6, jogos: 10 },
    { nome: "thiago", gols: 2, jogos: 10 },
    { nome: "caua", gols: 1, jogos: 3 },
];
let maisGols = jogadores.every((maisGols) => {
    return maisGols.gols >= 1
});
console.log(maisGols);