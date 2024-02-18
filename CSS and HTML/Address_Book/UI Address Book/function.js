export let myFriend = [];
export function addList(name, phoneNum){
           if(myFriend.length<5){ //make sure less than or equal to 5
            let numReal = parseFloat(phoneNum);// Convert the input to a number
            if(isNaN(numReal)){
                alert("please enter numbers, not string!");
            }else{
                let myList = {
                    name: name,
                    phoneNum: "0" + phoneNum //add 0 to phoneNum
                };  
                myFriend.push(myList);
                displayFriendList();
        }
        }else{//if more than 5
            alert("Must be at most 5 persons only!");
        }
        }
export function deleteList(nameFriend){
            let found = false;//to see whether user exist or not
            try {
                for(let i = 0; i < myFriend.length; i++){
                    if(myFriend[i].name === nameFriend){
                        myFriend.splice(i, 1);
                        found = true;
                        break;
                    }
                }
            } catch(error){
                console.error(error)
            }
            if(!found){//if the name is not found
                alert(nameFriend + " is not found");
            }
            displayFriendList();
        }
export function updateNum(Name, num){
            let found = false;// to see whther user is exist or not
            try {
                let numReal = parseFloat(num);
                if(isNaN(numReal)){
                    alert("please enter numbers only");
                    found = true;//to make sure that if(!found) statement will not be executed
                }else{
                    for(let i = 0; i < myFriend.length; i++){
                    if(myFriend[i].name === Name){
                        myFriend[i].phoneNum = num;
                        found = true;
                        break;
                        }
                    }
                }
            } catch(error){
                console.error(error);
            }
            if(!found){
                alert(Name + " is not found")
            }
            displayFriendList();
        }
//below is taking user input and pass to the above function
export function addFriend(){
            let name = document.getElementById("nameInput").value;
            let num = Number(document.getElementById("phoneInput").value);
            addList(name, num);
        }
export function deleteFriend(){
            let name = document.getElementById("deleteInput").value;
            deleteList(name);
        }
export function updateFriend(){
            let name = document.getElementById("updateNameInput").value;
            let num = document.getElementById("updatePhoneInput").value;
            updateNum(name, num);
        }
export function displayFriendList(){
            let friendListDiv = document.getElementById("friendList");
            friendListDiv.innerHTML = ""; // Clear the previous list
            for (let friend of myFriend) {
                let friendInfo = document.createElement("p");
                friendInfo.textContent = `Name: ${friend.name} - Phone Number: ${friend.phoneNum}`;
                friendListDiv.appendChild(friendInfo);
            }
        }

        