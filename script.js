var character = document.getElementById("character");
var block = document.getElementById("block");
var count=0;
function jump()
{
    if(character.classList == "animate")
        return;
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },400);
}
 var checkdead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<60 && blockLeft>20 && characterTop>=130)
    {
        block.style.animation = "none";
        alert("Gameover Score: "+ Math.floor(count/100));
        count=0;
        
    }
    else
    {
        count++;
        document.getElementById("score").innerHTML = Math.floor(count/100);
    }        
 },10);