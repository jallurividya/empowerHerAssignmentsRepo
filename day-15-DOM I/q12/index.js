const item = document.querySelector("ul");
const btn = document.querySelector("button");
let count = 4;
btn.addEventListener("click", function(){
    const li = document.createElement("li");
    li.textContent = "New Item";
    if(count%2==0){
        li.style.color = "red";
        li.style.fontStyle = "italic";     
    }
    else{
        li.style.color = "blue";
        li.style.fontWeight = "bold";
    }
    item.appendChild(li);
    count++;
})
    
