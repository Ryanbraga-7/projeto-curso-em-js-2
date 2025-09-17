
const aluno = {
  nome: "Carlos",
  idade: 16,
  notas: [8, 6, 7],

  
  calcularMedia: function () {
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
  }
};


const { nome, idade } = aluno;


aluno.notas = [...aluno.notas, 9]; 


function verificarSituacao(media) {
  return media >= 7 ? "Aprovado ✅" : "Reprovado ❌";
}


console.log("Nome do aluno:", nome);
console.log("Idade do aluno:", idade);

console.log("Notas do aluno:");
for (let nota of aluno.notas) {
  console.log(nota);
}

const mediaFinal = aluno.calcularMedia();
console.log("Média final:", mediaFinal);

console.log("Situação:", verificarSituacao(mediaFinal));
