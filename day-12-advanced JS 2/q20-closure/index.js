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

function createBankAccount(){
    let balance=0;
    let transactionHistory=[];
    function deposit(amount){
        balance+=amount;
        transactionHistory.push(`Deposited: ${amount}`);
        console.log("Deposited: ",amount);
    }
    function withdraw(amount){
        if(balance>amount){
            balance-=amount;
            transactionHistory.push(`Withdrawn: ${amount}`);
            console.log("Withdrawn: ",amount);
        }
        else{
            transactionHistory.push(`Failed Withdrawn: ${amount}`);
            console.log("Insufficient balance");
        }
    }
    function checkBalance(){
        console.log(`Current Balance: ${balance}`);
    }
    function getHistory(){
        return transactionHistory;
    }
    return {deposit, withdraw, getHistory, checkBalance};
}
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined
