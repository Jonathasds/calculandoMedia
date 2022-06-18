function calcular() {
    let nota1 = Number(document.getElementById("provaA").value);
    let nota2 = Number(document.getElementById("provaB").value);
    let trab = Number(document.getElementById("trabalho").value);
    let resultado = document.getElementById("resul");
    let media = (nota1 + nota2 + trab) / 3;




    if (nota1 === 0 || nota2 === 0 || trab === 0) {
        resultado.innerHTML = `digite uma nota`
    } else if (media >= 6) {
        resultado.innerHTML = `PARABÉNS!!, APROVADO, sua nota final foi ${media}!!`
    } else {
        resultado.innerHTML = ` REPROVADO, sua nota final foi ${media}, baixo da media!`
    }





}