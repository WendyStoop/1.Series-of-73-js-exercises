/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  /*var cake = prompt ("Do you want some cake?")
  if (cake == "yes"){
    window.alert ("Congrats")
  
    }
  if (cake != "yes"){
    window.alert ("More cake for me then :p !")
  }*/
var answer = "yes";
answer = window.prompt ("Do you want some cake?");

console.log ("Do you want some cake? " + answer);

if( answer == "yes") {
  window.alert("Congrats!");
} 
/*if( answer != "yes") {
  window.alert ("More cake for me then :p !")
}*/
else{
  window.alert ("More cake for me then :p !")
}

})();