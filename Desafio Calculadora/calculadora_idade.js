function calcularIdade() {
    const diaInput = parseInt(document.getElementById('dia').value);
    const mesInput = parseInt(document.getElementById('meses').value);
    const anoInput = parseInt(document.getElementById('anoNascimento').value);
    
    if (!diaInput || !anoInput) {
        window.alert("Algum campo não foi preenchido.");
        return;
    }

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();

    let idade = anoAtual - anoInput;
    
    if (mesAtual < mesInput || (mesAtual === mesInput && diaAtual < diaInput)) {
        idade--;
    }
    document.getElementById('resultado').innerText = "A sua idade é: " + idade + " anos.";
}

function calcularNumerica() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let operacao =document.getElementById('operacao').value
    let resultado = 0

    switch(op) {
        case "+" : resultado = Number(num1) + Number(num2); break;
        case "-" : resultado = Number(num1) - Number(num2); break;
        case "*" : resultado = Number(num1) * Number(num2); break;
    }

}