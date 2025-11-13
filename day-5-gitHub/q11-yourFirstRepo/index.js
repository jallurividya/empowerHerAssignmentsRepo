function checkPrime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkPrime(8))
console.log(checkPrime(11))

//check even or odd
function evenOdd(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(evenOdd(7));
console.log(evenOdd(14));