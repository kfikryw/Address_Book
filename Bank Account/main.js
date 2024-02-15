import { addAccount,depositAccount,withdrawAccount,interestAccount,myArray } from "./function.js";

addAccount("1",0);
addAccount("2",0);
addAccount("3",0);
addAccount("4",0);
addAccount("5",0);
depositAccount(1000);
withdrawAccount("2",50);
interestAccount(5);
console.log(myArray);
