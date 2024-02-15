export let myArray = [];
export function addAccount(accNum,balanceAmount){
    if(myArray.length<5){let userAccount = {
        accNum:accNum,
        balanceAmount:balanceAmount
    };
    myArray.push(userAccount);}
    else{
        alert("More than 5!");
    }
}
export function depositAccount(amount) {
    let isMoney = true;
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
}  
export function withdrawAccount(index, withdrawAmount) {
    let found = false;
    let isMoney = true;
    if (isNaN(withdrawAmount)) {
        isMoney = false;
    } else {
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].accNum === index) {
                found = true; // Set found to true once the account is found
                if (myArray[i].balanceAmount - parseFloat(withdrawAmount) >= 0) {
                    myArray[i].balanceAmount -= parseFloat(withdrawAmount);
                } else {
                    alert("Cannot withdraw !");
                }
                break;
            }
        }
    }
    if (found==false) {
        alert("Account no: " + index + " is not found");
    }
    if (isMoney==false) {
        alert("Please enter values only");
    }
}
export function interestAccount(interest){
    for(let i = 0; i < myArray.length;i++){
        myArray[i].balanceAmount = myArray[i].balanceAmount + (myArray[i].balanceAmount*interest)/100;
    }
}