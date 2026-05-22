document.writeln('Olá Mundo!!!');

window.alert('Olá Mundo, seu lindo!');

document.getElementById('Título').innerHTML = "Olá Mundo JavaScript";

let nomePrompt = window.prompt('Olá Aluno de JavaScript, qual o seu nome?');

document.getElementById('nomeAluno').innerHTML = ("O nome do aluno JavaScript é: " + nomePrompt);

let resposta = false;

if (resposta) {
    document.getElementById('nomeAluno').innerHTML = 'O aluno gosta de JavaScript'
}
else {
    document.getElementById('nomeAluno').innerHTML = 'O aluno NÃO GOSTA de JavaScript'
}

function exibeNomeAluno() {
    let inputAluno = document.getElementById('inputNomeAluno').value;
    document.getElementById('resposta').innerHTML = "O nome digitado foi: " + inputAluno;
}

exibeNomeAluno()