/*const lista = [{
    nome: "Joao",
    notaum: 6,
    notadois: 8
},
{
    nome: "Julia",
    notaum: 5,
    notadois: 6
},
{
    nome: "Paula",
    notaum: 9,
    notadois: 8
},
{
    nome: "Ricardo",
    notaum: 10,
    notadois: 5
},
]
function Resultado(notaum, notadois){
    return ((notaum + notadois)/2)
}
function Testar(aprovacao){

    if (Resultado >= 7){
        alert("Parabéns você passou no curso")
    }
    else{
        alert("Não foi dessa vez, tente novamente!")
    }

}
function PrintNomenota(listas){
   
    return`O Aluno ${listas.nome}\n teve a média de: ${Resultado(listas.notaum, listas.notadois)}
    ${Testar(listas.aprovacao)}`
}

for (let listas of lista){
    let Mensagem = PrintNomenota(listas)
    alert(Mensagem)
}*/

const lista = [
    {
    nome: 'Joao',
    notaum: 6,
    notadois: 8
},
{
    nome: 'Julia',
    notaum: 5,
    notadois: 6
},
{
    nome: 'Paula',
    notaum: 9,
    notadois: 8
},
{
    nome: 'Ricardo',
    notaum: 10,
    notadois: 5
},
]
function printStundentsAverage(listas) {
    if ((listas.notaum + listas.notadois) / 2 >= 7) {
      alert(`A média do aluno ${listas.nome} foi: ${(listas.notaum + listas.notadois) / 2}. Parabéns ${listas.nome}, você foi aprovado no concurso!`)
    } 
    else {
      alert(`A média do aluno ${listas.nome} foi: ${(listas.notaum + listas.notadois) / 2}. Não foi dessa vez ${listas.nome}, tente novamente!`)
    }
  }
  
  for (let listas of lista) {
    printStundentsAverage(listas)
  }
  

