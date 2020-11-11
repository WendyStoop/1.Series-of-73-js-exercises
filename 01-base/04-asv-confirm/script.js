/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
 
    var userConfirmed = false;
    do {
        var age = window.prompt("What is your age?"); 
        console.log ("what is your age? " + age);

        var gender = window.prompt("What is your gender?");
        console.log ("what is your gender? " +gender);

        var town = window.prompt ("Where do you live?");
        console.log ("you live in " + town  + "." );

        var message = ("You are " + age + ",you are a " + gender + " and you live in " + town  + ".")
        console.log (message);

        userConfirmed = window.confirm(message);
        
        /*if (userConfirmed == true) {
            console.log ("user has confirmed");

        } 

        else if (userConfirmed != true) { 
            console.log ("user has not confirmed");
        }*/
    } while(userConfirmed != true)

    


})();
