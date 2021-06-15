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