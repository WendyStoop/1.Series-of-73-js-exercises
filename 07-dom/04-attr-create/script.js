/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const source = document.getElementById ("source");
    //console.log(source);
    let getSource = source.getAttribute("data-image");
    //console.log(getSource);
    let papa = document.getElementById("target");
    //console.log(papa);
    let child = document.createElement("img");
    //console.log(child);
    
    child.src = getSource;

    papa.appendChild(child);
    //console.log(child);

    source.remove();





    // your code here

})();
