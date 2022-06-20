let time = document.getElementById("current-time");

setInterval(() =>{
let d = new Date();
time.innerHTML = d.toLocaleTimeString();
},1000)
 