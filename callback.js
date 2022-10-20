// passing functions as values and using function expressions
function greet (sayHello, sayHi, sayHowareyou) {
    sayHello()
    sayHi()
    sayHowareyou()
  }
  // parameters are sayHello & sayHi are call callbacks or callbacks function
  
  const sayHello = function () {
    console.log('Hello')
  }
  
  const sayHi = function () {
    console.log('Hi')
  }

  const sayHowareyou = function () {
    console.log('Howareyou')
  }
  
  greet(sayHello, sayHi, sayHowareyou)
  
  // Regular values like strings or numbers represent the data.
  // A function can be perceived as an action.
  // We can pass it between variables and run when we want.