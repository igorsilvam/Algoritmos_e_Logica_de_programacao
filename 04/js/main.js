/*/

Solicitar o nome do aluno e as 3 notas
do bimestre calcular a média daquele aluno.

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar 
seu melhor na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno
e a nota 

*/

let name = prompt("Qual é o seu nome?");
let n1 = prompt("Digite aqui sua primeira nota:");
let n2 = prompt("Digite aqui sua segunda nota:");
let n3 = prompt("Digite aqui sua terceira nota:");

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;
average = average.toFixed(2);

if (average > 6) {
  alert("Parabéns " + name + " vocẽ passou!, sua nota é " + average + ".");
} else if (average < 3) {
  alert(
    "Lamento " + name + " ,mais você reprovou é sua nota foi " + average + "."
  );
} else {
  alert(
    name +
      " prepara-se para prova de recuperação, pois sua nota foi " +
      average +
      "."
  );
}
