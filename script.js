let count=0;

document.getElementById("decBtn").onclick= function(){
    count--;
    document.getElementById("counter").textContent= count;
}

document.getElementById("resetBtn").onclick= function(){
    count=0;
    document.getElementById("counter").textContent= count;
}

document.getElementById("incBtn").onclick= function(){
    count++;
    document.getElementById("counter").textContent= count;
}