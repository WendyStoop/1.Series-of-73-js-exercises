/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var fruits = [
      'pomme',
      'poire',
      'fraise',
      'tomate',
      'orange',
      'mandarine',
      'durian',
      'pêche',
      'raisin',
      'cerise',
    ];
  
    document.getElementById('run').addEventListener('click', function() {
      fruits.shift(); //remove the first element of the array.
      fruits.pop(); //remove the last element of the array.
      fruits.unshift('banana'); //add an element to the start of the array.
      fruits.push('kiwi'); //Add an element to the end of the array.
  
      alert(fruits);
    });
  })();

