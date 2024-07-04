"use strict"
var nota1, nota2, nota3, media
//força o que foi escrito pelo usuário ser um número ele começa lendo do prompt depois le o parseFloat
// if = se, else if = se senão, else = senão
nota1=parseFloat(prompt("Insira sua primeira nota:"));
nota2=parseFloat(prompt("Insira sua segunda nota:"));
nota3=parseFloat(prompt("Insira sua terceira nota:"));
media=((nota1+nota2+nota3)/3);
window.alert("Sua média é de " + media);
if (media>=60)
{
    window.alert("Você foi aprovado!");
}
else if (media<60)
{
    window.alert("Você foi reprovado!")
}

