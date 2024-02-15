export let myArray = [];
export function addAccount(accNum,balanceAmount){
    if(myArray.length<5){
        let userAccount = {
        accNum:accNum,
        balanceAmount:balanceAmount
    };
    myArray.push(userAccount);}
    else{
        alert("More than 5!");
    }
    displayAccount();
}
export function depositAccount(amount) {
    let isMoney = true;//to see whether it is value or not
    if(isNaN(amount)){
        isMoney = false;
    }else{
    for (let i = 0; i < myArray.length; i++) {
        myArray[i].balanceAmount= parseFloat(myArray[i].balanceAmount) + parseFloat(amount);
    }
}
    if(!isMoney){
        alert("Please enter values only!");
    }
    displayAccount();
}  
export function withdrawAccount(index, withdrawAmount) {
    let found = false;
    let isMoney = true;
    if (Number(isNaN(withdrawAmount))) {
        isMoney = false;
    } else {
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].accNum === index) {
                found = true; //set found to true once the account is found
                if (myArray[i].balanceAmount - parseFloat(withdrawAmount) >= 0) {
                    myArray[i].balanceAmount -= parseFloat(withdrawAmount);
                } else {
                    alert("Insufficient! Cannot withdraw !");
                }
                break;
            }
        }
    }
    if (!found) {
        alert("Account no: " + index + " is not found");
    }
    if (!isMoney) {
        alert("Please enter values only");
    }
    displayAccount();
}
export function interestAccount(interest){
    for(let i = 0; i < myArray.length;i++){
        myArray[i].balanceAmount = myArray[i].balanceAmount + (myArray[i].balanceAmount*interest)/100;
    }
    displayAccount();
}
export function displayAccount(){
    let userListDiv = document.getElementById("userList");
    userListDiv.innerHTML = "";
    for (let Account of myArray) {
        let accountInfo = document.createElement("p");
        let balanceAmount = Account.balanceAmount.toFixed(2);//two decimal places only
        accountInfo.textContent = `Account Number : ${Account.accNum} , Balance Amount : ${balanceAmount}`;
        userListDiv.appendChild(accountInfo); 
    }
}
export function addList(){
    let noAcc = document.getElementById("accInput").value;
   //let amount = document.getElementById("amountInput").value;
    let amount = 0;
    addAccount(noAcc,amount);
}
export function depositList(){
    let amount = document.getElementById("depositInput").value;
    depositAccount(amount);
}
export function withdrawList(){
    let amount = document.getElementById("withdrawInput").value;
    let noAcc = document.getElementById("accAccess").value;
    withdrawAccount(noAcc,amount);
}
export function interestList(){
    let interest = document.getElementById("interestInput").value;
    interestAccount(interest);
}