/* ASSIGNMENT DESTRUCTURING */

let assngDestruct = () => {

    var user = {first: 'John', last: 'Doe'};
    var {first, last} = user;

    console.log('First name is ' + first);
    console.log('Last name is ' + last);

}
document.getElementById('adstrct-js').innerText = assngDestruct;

/* ****************************** */