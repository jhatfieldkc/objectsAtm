class Atm {
    constructor() {

    }
    login() {
        this.userPin = prompt("Enter PIN");
        let isFound = this.pinExists(this.userPin);
        if (isFound) {
            // valid login
            this.balance = Number(isFound);
            this.getBalance(this.balance);
        }
        else {
            alert("Invalid PIN");
        }
    }
    pinExists(userPin) {
        this.accounts = JSON.parse(localStorage.getItem("accounts"));
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.userPin == this.accounts[i].pin) {
                this.acctIndex = i;
                return this.accounts[i].balance;
            }
        }
        return false;
    }
    withdrawal() {
        this.amt = prompt("Enter withdrawal amount:");
        this.balance -= Number(this.amt);
        this.updateBalance();
    }
    updateBalance() {
        this.accounts[this.acctIndex].balance = this.balance;
        localStorage.setItem("accounts", JSON.stringify(this.accounts));
    }
    deposit() {

    }
    updatePin() {

    }
    getBalance(bal) {
        alert("Current Balance: $" + bal);
    }
}
let atm = new Atm();