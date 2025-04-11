let user="Farhaanah";
let MyAtmPin=2803;
let MyBalance=2444;
let AtmPin = prompt("Please enter your ATM pin");
if(AtmPin==MyAtmPin){
    console.log("Welcome "+ user);

let option=prompt("1 for Withdraw, 2 for Deposte, 3 for check balance, 4 for exit");
switch (option) {
    case "1":
        console.log("You clicked withdraw option");
        let  balance=prompt("Enter the withdraw Amount");
        let balanceamt=(MyBalance-balance);
        console.log("Your availabe balance is "+ balanceamt);
        break;

    default:
        break;
}








}