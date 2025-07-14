//console.log(`vanakkam da maple`)
// window.alert(`red or white`)
// window.alert(`You are gay !!!`)
// document.getElementById("paraId").textContent=`How may i help uuuuuuuuuu!!`;
// document.getElementById("h1id").textContent=`welcome Boss`;
// let name="Mani";
// let age=10;

// document.getElementById("p1").textContent=`Your name is ${name}`;
// document.getElementById("p2").textContent=`Your age is ${age}`;
//console.log(`your name is ${name}`,`\nage is ${age}`)

// let username;

// username=window.prompt("whats your name:");

// console.log(username);


let username;

document.getElementById("submit").onclick = function(){
    username=document.getElementById("name").value;
    document.getElementById("myh1").textContent=`hello ${username}`;
}

