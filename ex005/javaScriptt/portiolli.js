"use strict"
var nome, dia, mes
nome=window.prompt("Insira um nome: ");
dia=parseFloat(prompt("Informe o dia: "));
mes=parseFloat(prompt("Informe o mês: "));
if(nome=="Celso Portiolli" && dia==11 && mes==9)
{
    window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro.")
}
else if(nome=="Thayane" && dia==4 && mes==7)
{
    window.alert("Faça a prova com atenção.")
}
else
{
    window.alert("Nada a ver cara!")
}

