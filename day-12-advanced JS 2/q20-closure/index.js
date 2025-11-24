function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log("Current count: ",count);
    }
    function decrement(){
        count--;
        console.log("Current count: ",count);
    }
    return {increment,decrement};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
