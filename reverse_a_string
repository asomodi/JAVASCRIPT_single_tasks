/* Task: Reverse a string 
Solution 1: with a For loop
Solution 2: with Recursion
Solution 3: with Built-In Functions
*/

// Solution 1 - with a For loop

function strReverse1(str) { 
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
 
// Solution 2 - with Recursion

function strReverse2(str) {    
     if (str === "")
    return "";
  else
    return strReverse2(str.substr(1)) + str.charAt(0);
}

// Solution 3 - with Built-In Functions

function strReverse3(str) {  
     return str.split("").reverse().join("");      
}
