/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var text = document.getElementById("target");
    var textContent = text.innerHTML;
    

    var letters = textContent.split("");
    console.log (letters);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      getRandomNumber(0,10)
      console.log( getRandomNumber(0,10))

    letters.forEach(function(letter) {
      
      console.log(letter);
    })
        


})();


//function myFunction(item, index) {
 // document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 