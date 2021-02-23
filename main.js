/*
X Task 1: Add a listener to the Submit button so that when the button is clicked, you store in memory whatever is typed in the Input field.

X Task 2: If nothing was in the Input field when Submit was pressed, display an error message in a div. If they press Submit again and there is input this time, delete any error messages on screen.

X Task 3: Take the input that is in memory and add it to a div, clearing out the Input field.

X Task 4: Store the input from the Input field into an array in memory.

XTask 5: Compare the last thing the user typed with a seret password string that you invent and store in memory.

XTask 6: If the password from Input is correct, display any strings stored in the array and let the user know someone tried to hack them.

XTask 7: If the password is not correct, display an error message.

******Task 8: If there have been 4 incorrect passwords entered and stored in the array, delete the button from the screen and let the user know the account has been locked.
*/


'use strict';

let userInput = [];
const secret="asdfasdf";

document.addEventListener("DOMContentLoaded", () => {
    const surveyButton = document.getElementById("submit");
          surveyButton.addEventListener("click", () => {
              const inputField = document.getElementById("name");
              userInput.push(inputField.value);
              
              userInput[userInput.length -1]; //is this equal to secret
              
              
              if(userInput != "Life") {
                  const errorMsg = document.getElementById("error");
                        errorMsg.innerHTML = "You typed the wrong password";
              } else {
                  const errorMsg = document.getElementById("error");
                        errorMsg.innerHTML = "";
                  const entries = document.getElementById("entries");
                        entries.innerHTML = userInput;
                  inputField.value = '';
                  inputField.focus();
                  const secret = document.getElementById("entries");
                      entries.innerHTML = "You've been hacked"
                  
           } //else{
            //      const secret = document.getElementById("userinput");
            //      inputField.value i= 4;
            //      entries.innerHTML = "Sorry you've been locked!" 
             // }
                 
          });
});
