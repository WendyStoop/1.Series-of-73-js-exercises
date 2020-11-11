/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        var operandOne =  document.getElementById("op-one").value;
        console.log (operandOne);
        var operandTwo = document.getElementById("op-two").value;
        console.log (operandTwo);

        /*if(operation == "multiplication") {
            var multiplication = Number(operandOne) * Number(operandTwo);
            window.alert(multiplication);    
        }
        if(operation == "division") {
            var division = Number(operandOne) / Number(operandTwo);
            window.alert(division);  
         }
         if(operation == "addition") {
             var addition = Number(operandOne) + Number (operandTwo);
             window.alert(addition);
         }
         if(operation == "substraction") {
             var substraction = Number(operandOne) - Number(operandTwo);
             window.alert(substraction);
         }*/
         switch (operation){
             case "multiplication":
                var multiplication = Number(operandOne) * Number(operandTwo); 
                window.alert(multiplication)
             break;
             case "division":
                var division = Number(operandOne) / Number(operandTwo);
                window.alert(division);
             break;
             case "addition":
                var addition = Number(operandOne) + Number (operandTwo);
                window.alert(addition);
             break;
             case "substraction":
                var substraction = Number(operandOne) - Number(operandTwo);
                window.alert(substraction);
             break;
             default:
            window.alert ("This operation is not valid");
         }
        

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
