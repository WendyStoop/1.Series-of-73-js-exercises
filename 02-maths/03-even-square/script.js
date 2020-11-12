/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  

        // your code here
       /*document.querySelector("run");*/

       let squareNrs = [ ];

       var button= document.getElementById("run") .addEventListener("click", function (){
           for(var i = 2; i < 21; i+=2 ){




            console.log(Math.pow(i, 2));
            squareNrs.push(Math.pow(i, 2))

             
            }
    
       alert(squareNrs);
        }
       
       
       
        )

     
      
       

       
     

    })();
