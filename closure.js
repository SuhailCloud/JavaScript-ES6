// Ex - 1

let a = 10;

function myFunc() {
    let b = 20;
    console.log(a + b); //Prints 30
}
myFunc();


// Ex - 2

var x = 10;

function first() {
    var y = 20;

    function second() {
        var z = x+y;

        console.log(z);
    }
    return second();
}

first();