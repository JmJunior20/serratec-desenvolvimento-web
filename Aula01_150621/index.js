//Funções

// É uma função sem retorno e sem parâmetros.
function dispararAlerta() {
    alert("Olá!");
}

// É uma função sem retorno e com parâmetros.
function dispararAlerta2(mensagem) {
    alert(mensagem);
}

// É uma função com retorno e sem parâmetro.
function retornarNumeroDaMegaSena() {
    return "856321"
}

//É uma função com retorno e com parâmetro.
function retornarSeParOuImpar(numero) {
    // Ternário
    return (numero % 2 != 0) ? "Impar" : "Par";   
}

//dispararAlerta();
//dispararAlerta2("Bem vindos de volta ;)");

//==================//================//

/* // Variável com escopo global
let nome = "Fulano";

function escreverNomeNaTela() {
    //É um escopo de função ou local
    var nome = "Ciclano";
    //var sobreNome = " da Silva";
    document.write(nome);
}

if(true) {
    // Aqui é um escopo de bloco.
    let nome = "Beltrano";
    document.write(nome);
}

//escreverNomeNaTela();
document.write(nome); */

//==================//================//
//Arrays

let nomes = [];

// Serve para add um novo elemento no array.
nomes.push("Fulano");

nomes[0]

/*
Ganhar dominio nesse inicio.

Dominar Array (push, filter, find, findIndex, forEach e o map).
Diferenca entre escopos (Global, Função e Bloco).
Referencia de objetos.

Links: para estudo
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_let.asp
https://www.w3schools.com/js/js_scope.asp

*/

//Trabalhando com datas

// 4 Formas diferentes de instanciar uma data.
new Date();
new Date(year, month, day, hours, minutes, seconds, milliseconds);
new Date(milliseconds);
new Date("2021-5-29");

//Padrão para trabalhar com data
//Data ISO >> "2021-03-24" (Padrão internacional)
//Curto >> "25/03/1990"
//Data longa >> "25 de março de 1990"

/*Métodos de data:
- getFullYear() retorna o ano em formato yyyy
- getMonth() retorna o mês em numeros de 0-11
- getDate() retorna o dia do mês em números de 1-31
- getHours() retorna as horas de 0-23
- getMinutes() retorna os minutos entre 0-59
- getSeconds() retorna os segundos entre 0-59
- getMilliseconds() retorna 0-999
- getTime() retorna o tempo em milesegundos baseado na data de 1 de janeiro de 1970.
- getDay() retorna o dia da semana de 0-6
- getNow() retorna o timer atual

-toLocaleString() retorna data e hora no formato apresentavel Brasil
*/

