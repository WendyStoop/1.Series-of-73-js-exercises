/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
      { id: '0001', available: false, user: 'leny', os: 'macOS' },
      { id: '0002', available: false, user: 'Nicolas' },
      { id: '0003' },
      { id: '0004', os: 'Windows' },
      { id: '0005' },
      { id: '0006', os: 'macOS' },
      { id: '0007' },
      { id: '0008' },
      { id: '0009', available: false, user: 'Anthony' },
    ];
    const defaultProps = {
      available: true,
      os: 'linux',
      user: null,
    };
  
    document.getElementById('run').addEventListener('click', () => {
      for (let i = 0; i < computers.length; i++) {
        //Spread adds the contents  of an object to a new object. So in this case.
        //It will add all the items of defaultProps to a new object
        //and than it adds the contents of an element of the computers array.
        //When adding multiple items using spread the right one overwrites the left one
        computers[i] = { ...defaultProps, ...computers[i] };
      }
      console.log(computers);
    });
  })();
  