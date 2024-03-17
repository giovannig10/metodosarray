//neste exemplo usamos o filter para que possamos ver os jogadores com
//4 ou mais gols
let jogadores = [
    { nome: "giovanni", gols: 2, jogos: 8 },
    { nome: "vinicius", gols: 4, jogos: 10 },
    { nome: "vitor", gols: 6, jogos: 10 },
    { nome: "thiago", gols: 1, jogos: 10 },
    { nome: "caua", gols: 0, jogos: 3 },
];
let maisGols = jogadores.filter((maisGols) => {
    return maisGols.gols >= 4
});
console.log(maisGols);