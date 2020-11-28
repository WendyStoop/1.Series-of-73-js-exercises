/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let image = document.querySelector("figure img");
    //console.log(image);
    let oldSrc = image.src;
    //console.log(oldSrc);
    let newSrc = image.getAttribute("data-hover");
    //console.log(newSrc);

    //oldSrc=newSrc

    image.onmouseover = function(){
        image.src = newSrc;
    }
    image.onmouseout = function(){
        image.src = oldSrc;
    }


        
   

})();
