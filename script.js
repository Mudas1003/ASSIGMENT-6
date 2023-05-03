let btn = document.querySelector('button');
btn.addEventListener('click', inputMsg);
{
function inputMsg(){
    txt = prompt('Enter a number between 1 to 100');
    check="You win";
    
    for(i=0;i<5;i++){
        guess=Math.floor(Math.random()*100);
        document.getElementById("text").innerHTML=guess;
        i++;
    }
    
   
}
}
