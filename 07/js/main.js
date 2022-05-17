/* 

Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite a opçãao desejada

1. Cadastrar um item na lista
2. Mostrar intens cadastrados
3. Sair do programa.


---------------------------------------------------------------------------------------

O programa deverá capturar o número digitado pelo usuário e 
mostrar o seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem:
        "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let option;
let base = [];

while (option != 3) {
  option = Number(
    prompt(`
    Olá usuário! Digite a opçãao desejada

    1. Cadastrar um item na lista
    2. Mostrar intens cadastrados
    3. Sair do programa.`)
  );

  switch (option) {
    case 1:
      base.push(prompt("Digite o item na lista:"));
      break;

    case 2:
      if (base.length == 0) {
        alert("Não existem itens cadastrados");
      } else {
        alert(base);
      }
      break;

    case 3:
      alert("Obrigado, até mais!");
      break;

    default:
      alert("Opção invalida tente novamente!");
  }
}
