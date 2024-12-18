// let idade = prompt ('Digite a idade:');

// if (idade >= 18){
//      alert ('Você é maior de idade.');
// } else {
//     alert ('Você é menor de idade');
// }

let nomeUsuario = prompt ('Informe seu nome:');
let sobrenomeUsuario = prompt ('Informe seu sobrenome:');
alert ('Bem vindo ' + nomeUsuario +' ' + sobrenomeUsuario);

userDecision = prompt ( + nomeUsuario +''+ sobrenomeUsuario +' você esta pronto para Começar?   1-Yes:  2-No');
if (userDecision == 1 ) {
    let diaSemana = prompt ('Informe qual dia da semana é hoje:');
    if (diaSemana == 'Sábado'){
    alert ('Bom final de Semana');
    } else if (diaSemana == 'Domingo'){
    alert ('Bom final de Semana');
    } else {
    alert ('Boa semana');
    }
} else alert (`Que pena, nos ve mos na proxima!`);