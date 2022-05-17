/* 

Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/

alert("Olá sejá bem-vindo a calculadora de dois números!");
let numberOne = Number(prompt("Digite o primeiro número:"));
let numberTwo = Number(prompt("Digite o segundo número:"));

function cal(one, two) {
  let sum = one + two;
  alert(`O valor da soma é ${sum}`);

  let subtraction = one - two;
  alert(`O valor da subtração é ${subtraction}`);

  let multiplication = one * two;
  alert(`O valor da multiplicação é ${multiplication}`);

  let division = one / two;
  alert(`O valor da divisão é ${division}`);

  let restDivision = one % two;
  alert(`O valor do resto da divisão é ${restDivision}`);

  const parImpar = sum % 2;
  const difference = one == two;

  switch (parImpar) {
    case 1:
      alert(`O número ${sum} é impar`);
      break;
    default:
      alert(`O número ${sum} é par`);
  }

  switch (difference) {
    case true:
      alert(`Os números ${one} e ${two} são iguais`);
      break;
    default:
      alert(`Os números ${one} e ${two} são diferentes`);
  }

  return;
}

cal(numberOne, numberTwo);
