let pessoas = [
    { id:1, nome:"Junior", idade:31 },
    { id:2, nome:"Maria", idade:58 },
    { id:3, nome:"Pedro", idade:18 },
    { id:4, nome:"Julio", idade:17 },
    { id:5, nome:"Ana", idade:15 }
]

document.write("Nome das pessoas:" + "<br>");
pessoas.forEach(pessoa => {
    document.write(pessoa.nome + "<br>");
})

//Pessoas maiores do que 18
document.write("<br>Pessoas maiores do que 18 anos:" + "<br>");
let pessoasMaiores = pessoas.filter(pessoa => pessoa.idade > 18)

pessoasMaiores.map(pessoa => {
    document.write(pessoa.nome +  " " + pessoa.idade + "<br>")
})

//Pessoas com Id igual a 3
pessoas.find(pessoa => pessoa.id == 3);


//Deletar a pessoa que tenha Id igual a 2
var indice = pessoas.findIndex(pessoa => pessoa.id == 2)
pessoas.splice(indice, 1)

//Alterar o nome da pessoa que tenha Id igual a 1
var alterar = pessoas.find(pessoa => pessoa.id == 1)
alterar.nome = "Junior Monteiro"

//Deletar e incluir outra pessoa no lugar
pessoas.splice(2, 1, {id:4, nome:"Mario Alberto", idade:15})


//Retornar um novo Array somente com Id e nome - Uso o map para retornar um array
document.write("<br> Id e nome das pessoas:" + "<br>");
var nomes = pessoas.map(pessoa => {
    document.write("Id:" + pessoa.id + " - " + pessoa.nome + "<br>");
    return pessoa.id, pessoa.nome
})