//Get string from the UI
//Controller Function
function getValue(){

document.getElementById("alert").classList.add("invisible");

let userString = document.getElementById("userString").value;

let revString = reverseString(userString);

displayString(revString);

}

//Reverse the String
//Logic Function
function reverseString(userString){

    let revString = [];

    // reverse a string using a for loop

    for (let index = userString.length - 1; index >= 0; index--) {
        revString.push(userString[index]);
    }

    return revString.join('');

}

//Display string in message to user
//View Function
function displayString(revString){
    //write to the page

    document.getElementById("msg").innerHTML = `${revString}`;
    //turn on alert
    document.getElementById("alert").classList.remove("invisible");
}