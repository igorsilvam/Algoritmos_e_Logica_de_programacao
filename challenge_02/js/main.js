/*

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

const students = [
  {
    name: "Rosa",
    testOne: 6,
    testTwo: 8,
  },
  {
    name: "Maria",
    testOne: 3,
    testTwo: 4,
  },
  {
    name: "Franky",
    testOne: 9,
    testTwo: 8,
  },
];

function test(one, two) {
  return (one + two) / 2;
}

for (let result of students) {
  let myResult = test(result.testOne, result.testTwo);
  if (myResult >= 7) {
    alert(
      `Olá ${result.name} sua média é ${myResult}.\nParabéns você passou no concurso!`
    );
  } else {
    alert(
      `Olá ${result.name} sua média é ${myResult}.\nLamento mais você não passou no concurso!`
    );
  }
}
