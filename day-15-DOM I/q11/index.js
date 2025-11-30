document.getElementById("heading").textContent="Welcome to the DOM World!";
let para = document.getElementsByTagName("p");
for(let i=0;i<para.length;i++){
    para[i].style.color="blue";
}
let divi = document.querySelector(".container");
divi.style.backgroundColor="yellow";
    
