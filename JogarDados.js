function JogarDados()
{
    var img = document.querySelectorAll('img')[0];
    var num = Math.floor(1+Math.random()*6); 
    var srcImg = "Assets/Dado"+ num +".png";
    img.setAttribute('src', srcImg);

}