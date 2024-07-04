"use strict"
var peso, pesoMaior, pesoMenor, somaPeso, media
while(peso!=0)
{
    peso=parseFloat(prompt("Insira o peso do gado: "))
    if(pesoMenor<peso)
    {
        pesoMenor ++
    }
    if(pesoMaior>peso)
    {
        pesoMaior ++
    }
    somaPeso += peso
}
media = somaPeso / peso
window.alert(media)
// ESSE ARQUIVO SERÁ UTILIZADO PARA A CORREÇÃO, DESCONSIDERE