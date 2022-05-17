/* 

Crie uma lista de pacientes

Cada paciente deverá conter
    nome
    idade
    peso
    altura

Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos

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

let patientsName = [];
let patientsAge = [];
let patientsHeight = [];
let patientsWeight = [];

for (let patient of patients) {
  patientsName.push(patient.name);
  patientsAge.push(patient.age);
  patientsHeight.push(patient.height);
  patientsWeight.push(patient.Weight);

  alert(
    `O nome do paciente é ${patient.name} com a idade de ${patient.age} anos e altura de ${patient.height}Cm, com peso de ${patient.Weight}Kg ${patient}`
  );
}
