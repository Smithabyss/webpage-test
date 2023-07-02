function JogarDados()
{
    var img = document.querySelector('#img');
    var num = Math.floor(1+Math.random()*6); 

    if(num === 1)
    {
        img.src = 'Assets/Dado1.png';
    }
    if(num === 2)
    {
        img.src = 'Assets/Dado2.png';
    }
    if(num === 3)
    {
        img.src = 'Assets/Dado3.png';
    }
    if(num === 4)
    {
        img.src = 'Assets/Dado4.png';
    }
    if(num === 5)
    {
        img.src = 'Assets/Dado5.png';
    }

    if(num === 6)
    {
        img.src = 'Assets/Dado6.png';
    }
}