function JogarDados()
{
    var img1 = document.querySelectorAll('img')[0];
    var num1 = Math.floor(1+Math.random()*6); 
    var srcImg = "Assets/Dado"+ num1 +".png";
    img1.setAttribute('src', srcImg);

    var img2 = document.querySelectorAll('img')[1];
    var num2 = Math.floor(1+Math.random()*6); 
    var srcImg = "Assets/Dado"+ num2 +".png";
    img2.setAttribute('src', srcImg);


    if(num1 > num2)
    {
        document.getElementById('texto').innerHTML = "Jogador 1 ganhou!"
    }
    else if(num1 === num2)
    {
        document.getElementById('texto').innerHTML = "Empate!"
    }
    else
        document.getElementById('texto').innerHTML = "Jogador 2 ganhou!"
}