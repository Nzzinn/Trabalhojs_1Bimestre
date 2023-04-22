function calculaMedia(){
    const nome = document.getElementById('nome').value;
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const nota4 = Number(document.getElementById('nota4').value);
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    if(media >= 6){
        document.getElementById('resultado').innerHTML = `O aluno ${nome} está aprovado com a média ${media}!`;
        document.getElementById('resultado').style.backgroundColor = 'green';
    }else if(media > 2 && media < 6){
        document.getElementById('resultado').innerHTML = `O aluno ${nome} está de recuperação com a média ${media}!`;
        document.getElementById('resultado').style.backgroundColor = 'cornflowerblue';
    }else if(media <= 2){
        document.getElementById('resultado').innerHTML = `O aluno ${nome} está reprovado com a média ${media}!`;
        document.getElementById('resultado').style.backgroundColor = 'indianred';
    }
}