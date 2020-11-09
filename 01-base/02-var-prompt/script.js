/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    console.log("Wendy")
    var person = prompt("Please type your name", "Name");

    if(person != null ){
        window.alert("Hello" + person)
    }
    else{
        window.alert("You've not written your name")
    }


})();