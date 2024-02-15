import { displayAccount,addList,withdrawList,depositList,interestList } from "./bank.js";
document.getElementById("addButton").addEventListener("click",addList);
document.getElementById("depositButton").addEventListener("click",depositList);
document.getElementById("withdrawButton").addEventListener("click",withdrawList);
document.getElementById("interestButton").addEventListener("click",interestList);
displayAccount();