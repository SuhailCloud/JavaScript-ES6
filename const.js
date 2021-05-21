/*
    If its a const we can not change
*/

const city = "Colombo";
city = 'Galle'; //Error
console.log(city);


/*
    If its a const array or object we can change the values inside that.
*/

const city = ['Galle', 'Kandy'];
city.push('Colombo');
console.log(city);

