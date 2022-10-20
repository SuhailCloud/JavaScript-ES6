const print = {
    function1: function() {
        console.log('This is the Function 1', this);
    },

    function2: () => {
        console.log('This is the Function 2', this);
    }

    function3: () => {
        console.log('This is the Function 3', this);
    }
}

print.function1();
print.function2();
print.function3();

//this keyword wont work with arrow function. 