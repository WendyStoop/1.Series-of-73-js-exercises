/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var target = document.getElementById("target");
    target.innerHTML = "test"

    var date = new Date();
    var hours = date.getHours();
            //console.log (hours);
    if (hours < 18) {
        target.innerHTML= "<em>Hello</em>"
    }
    else {
        target.innerHTML="<em>Good evening</em>"
    }

})();
