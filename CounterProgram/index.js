let count=0;

document.getElementById("increase").onclick=function(){
    count++;
    document.getElementById("Countlable").textContent=count;
}
document.getElementById("decrease").onclick=function(){
    count--;
    document.getElementById("Countlable").textContent=count;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("Countlable").textContent=count;
}