let result1=document.getElementById("res1");
let result2=document.getElementById("res2");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function Generate()
{
    
    let pass1="",pass2="";
    for(let i=0;i<15;i++)
    {
        let randomLetter1=characters[Math.floor(Math.random()*characters.length)];
        let randomLetter2=characters[Math.floor(Math.random()*characters.length)];

        pass1+=randomLetter1;
        pass2+=randomLetter2;
    }

    result1.textContent=pass1;
    result2.textContent=pass2;
}

function copyText1(){
    navigator.clipboard.writeText(result1.textContent);
}
function copyText2(){
    navigator.clipboard.writeText(result2.textContent);
}