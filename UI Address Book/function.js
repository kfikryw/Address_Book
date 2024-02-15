export let myFriend = [];
export function addList(name, phoneNum){
           if(myFriend.length<5){ //make sure less than or equal to 5
            let numReal = parseFloat(phoneNum);// Convert the input to a number
            if(isNaN(numReal)){
                alert("please enter numbers, not string!");
            }else{
                let myList = {
                    name: name,
                    phoneNum: "0" + phoneNum //add 0 to phoneNum because it keeps removing 0
                };  
                myFriend.push(myList);
                displayFriendList();
        }
        }else{//if more than 5
            alert("Must be at most 5 persons only!");
        }
        }
export function deleteList(nameFriend) {
    let found = false;//to check if user exists
    try {
        let left = 0;
        let right = myFriend.length - 1;
        // I use binary search since it's faster than linear search and also for fun
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let midName = myFriend[mid].name;
            if(midName === nameFriend) {
            //if the name is found, remove it from the array
            myFriend.splice(mid, 1);
            found = true;
            break;
        }else if (midName < nameFriend) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    }catch(error) {
    console.error(error);}        
    // If the name is not found, alert the user
    if (!found) {
                alert(nameFriend + " is not found");
            }     
    displayFriendList();
    }
export function updateNum(Name, num) {
    let found = false; //to check if user exists
    try {
        let numReal = parseFloat(num);
        if (isNaN(numReal)) {
            alert("Please enter numbers only");
            found = true; 
        } else {
            let left = 0;
            let right = myFriend.length - 1;
            //binary search for the name
            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                let midName = myFriend[mid].name;
                if (midName === Name) {
                    myFriend[mid].phoneNum = num;
                    found = true;//name is found
                    break;
                } else if (midName < Name) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
    // If the name is not found, alert the user
    if (!found) {
        alert(Name + " is not found");
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

        