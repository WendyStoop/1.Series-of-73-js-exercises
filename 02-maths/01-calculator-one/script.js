/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        /*console.log("Addition button was clicked");*/
        var operandOne =  document.getElementById("op-one").value;
        console.log (operandOne);
        var operandTwo = document.getElementById("op-two").value;
        console.log (operandTwo);
        var addition = Number(operandOne) + Number(operandTwo);
        window.alert(addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an addition
        /*console.log("Addition button was clicked");*/
        var operandOne =  document.getElementById("op-one").value;
        console.log (operandOne);
        var operandTwo = document.getElementById("op-two").value;
        console.log (operandTwo);
        var substraction = Number(operandOne) - Number(operandTwo);
        window.alert(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var operandOne =  document.getElementById("op-one").value;
        console.log (operandOne);
        var operandTwo = document.getElementById("op-two").value;
        console.log (operandTwo);
        var multiplication = Number(operandOne) * Number(operandTwo);
        window.alert(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var operandOne =  document.getElementById("op-one").value;
        console.log (operandOne);
        var operandTwo = document.getElementById("op-two").value;
        console.log (operandTwo);
        var division = Number(operandOne) / Number(operandTwo);
        window.alert(division);
    });
})();
