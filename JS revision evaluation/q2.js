function createRateLimiter(limit, interval){
    let count = 0
    let timer = null
    return function(){
        if(count<limit){
            count++
            if(!timer){
                timer=setTimeout(() => {
                    count=0
                    timer=null
                }, interval);
            }
            return "call allowed"
        }
        else{
            return "Rate limit exceeded"
        }
    }
}
const result = createRateLimiter(3,5000)
console.log(result())
console.log(result())
console.log(result())
console.log(result())