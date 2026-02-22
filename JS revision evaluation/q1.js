function createBankAccount(initialBalance = 0) {
    let balance = initialBalance
    let transactionHistory = []
    return {
        deposit(amount) {
            if (typeof amount !== "number" || amount <= 0) {
                return "Deposit amount must be positive."
            }
            balance += amount;
            transactionHistory.push(`Deposited : ${amount}`)
            return `Deposit Successful. Current balance : ${balance}`
        },
        withdraw(amount) {
            if (typeof amount !== "number" || amount <= 0) {
                return "Withdrawl amount must be positive."
            }
            if (amount > balance) {
                return "Insufficient amount"
            }
            balance -= amount
            transactionHistory.push(`withdrawn : ${amount}`)
            return `Withdraw Successful. Current balance : ${balance}`
        },
        getBalance() {
            return `Current Balance : ${balance}`
        },
        getTransactionHistory() {
            return [...transactionHistory]
        }
    }
}
const account = createBankAccount(1000)
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.withdraw(2000))
console.log(account.deposit(-789));
console.log(account.getBalance());
console.log(account.getTransactionHistory());


