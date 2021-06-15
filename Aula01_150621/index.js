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