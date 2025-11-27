let count=0;
const interval = setInterval(()=>{
    console.log("Loading...");
    count++;
    if(count==5){
        console.log("Loaded successfully!");
        clearInterval(interval);
    }
},1000);