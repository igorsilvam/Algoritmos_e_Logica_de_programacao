/*

Dado uma lista de pacientes, descubra o IMC de cada paciente e imprima

"Paciente X possui o IMC de: Y"

Onde X é o nome do paciente e Y é o IMC desse paciente

Crie uma função para fazer p cálculo de IMC

*/

const patients = [
  {
    name: "Boris",
    age: 20,
    height: 170,
    Weight: 75,
  },
  {
    name: "Pedro",
    age: 30,
    height: 180,
    Weight: 80,
  },
  {
    name: "Gold D. Roger",
    age: 53,
    height: 274,
    Weight: 100,
  },
];

function IMC(Weight, height) {
  return (Weight / (height / 100) ** 2).toFixed(2);
}

function printIMC(patient) {
  return `Paciente ${patient.name} possui o IMC de: ${IMC(
    patient.Weight,
    patient.height
  )}`;
}

for (let patient of patients) {
  let result = printIMC(patient);
  alert(result);
}
