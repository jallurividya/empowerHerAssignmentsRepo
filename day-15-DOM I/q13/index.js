const bgBtn = document.getElementById("bg-btn"); 
const txtBtn = document.getElementById("txt-btn");
const div = document.getElementById("output");
bgBtn.addEventListener("click",function(){
    const bgcolor = document.getElementById("col-name").value;
    if(Validate(bgcolor)){
        document.body.style.backgroundColor=bgcolor;
    } 
});
txtBtn.addEventListener("click", function() {
    const text = document.getElementById("txt-cnt").value;
    if(text === ""){
        alert("Please enter some text!");
    }
    else{
        document.getElementById("output").textContent = text;
    }
});
function Validate(color){
    const temp = document.createElement("div");
    temp.style.backgroundColor = color;
    if(temp.style.backgroundColor === ""){
        alert("Enter a valid color");
        return false;
    }
        return true;
}