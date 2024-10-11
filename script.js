let luckyNumber=Math.floor(Math.random() * 100);
let i=1;
function guess()
    {
        var number=document.getElementById("input").value;
        var p=document.getElementById("para");
        if(i<=7){
        if(number==luckyNumber){
            p.innerHTML=" You have guessed it! CONGRATULATIONS!";
            
        }
        else if( number==(luckyNumber+1) || number==(luckyNumber-1)  ){
            p.innerHTML=" TOO CLOSE ";

        }
        else if(number>luckyNumber)
        {
            p.innerHTML= "Too high! YOU HAVE USED "+i+" OF 7 TRIALS";
        }
        else if(number<luckyNumber)
        {
        p.innerHTML= "Too low! YOU HAVE USED "+i+" OF 7 TRIALS";
        }
        i++;
    }
    else
    {
        p.innerHTML="You lost all your trials";
    }


}  
    



