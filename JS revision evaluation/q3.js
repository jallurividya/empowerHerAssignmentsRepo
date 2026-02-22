function createMyInterval(){
    let id =1
    const timers = {}
    function mySetInterval(callback, delay){
        const id1 = id++
        function run(){
            timers[id1] = setTimeout(()=>{
                callback()
                if(timers[id1]){
                    run()
                }
            },delay)
        }
        run()
        return id1
    }
    function myClearInterval(id1){
        if(timers[id1]){
            clearTimeout(timers[id])
            delete timers[id1]
        }
    }
    return {mySetInterval, myClearInterval}
}

const interval = createMyInterval()
const id = interval.mySetInterval(()=>{
    console.log("Running");
},1000)
setTimeout(()=>{
    interval.myClearInterval(id)
    console.log("Stopped");
},5000)