export let myFriend = [];
export function addList(name, phoneNum){
    if(myFriend.length<5){ 
     let numReal = parseFloat(phoneNum);// Convert the input to a number
     if(isNaN(numReal)){
         alert("please enter numbers, not string!");
     }else{
         let myList = {
             name: name,
             phoneNum: "0" + phoneNum //add 0 to phoneNum
         };  
         myFriend.push(myList);
 }
 }else{
     alert("Must be at most 5 persons only!");
 }
 }
 export function deleteList(nameFriend){
     let found = false;
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
 }
 export function updateNum(Name, num){
     let found = false;
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
 }