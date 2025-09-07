const body=document.getElementsByTagName("body") [0]
function setColor(name) 
{body.style.backgroundColor=red;}

function randomColor(){
    const red=Math.round (Math.random()*255)
    const green=Math.round (Math.random()*255)
    const blue=Math.round (Math.random()*255)
    

    const color=`rgby(${red}, ${green}, ${blue})`
    body.style.backgroundColor=color;
}
