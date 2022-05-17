/* 

** Jogo da advinhação **

Apresente a mensagem ao usuário:
"Advinhe o número que estou pensando? Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório
e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não adivinhar o número, mostar a mensagem:
"Erro, tente novamente:"

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você advinhou o número em x tentativas"

Substitua o "x" da mensagem, pelo número de tentativas

*/

let quest = prompt("Advinhe o número que estou pensando? Está entre 0 e 10");
let chance = 1;

const numberRan = Math.round(Math.random() * 10);

while (Number(quest) != numberRan) {
  quest = prompt("Erro, tente novamente:");
  chance++;
}

alert(`Parabéns! Você advinhou o número ${numberRan} em ${chance} tentativas`);
