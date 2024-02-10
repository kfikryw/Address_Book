import { addFriend,deleteFriend,updateFriend,displayFriendList } from "./function.js";

//event listener
document.getElementById("addButton").addEventListener("click",addFriend);
document.getElementById("deleteButton").addEventListener("click",deleteFriend);
document.getElementById("updateButton").addEventListener("click",updateFriend);
displayFriendList();