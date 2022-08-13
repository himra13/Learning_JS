// Example function
function myFirstJSFunc(){
    console.log('hello world')
}
myFirstJSFunc()

// Func with parameters
function mySecondJSFunc(a, b){
    console.log(a - b)
}
// mySecondJSFunc('hell', 'my')
mySecondJSFunc(10, 5)

function testLocalVariable() {
    var hello = 'hello';
    var hey = 'hey'
}
// can't access local variables 
// console.log(hello)
// console.log(hey)

// function can have return statement
function returnValue(){
    var hell = 10;
    return hell
}
console.log(returnValue())

// function does not need to have return statement, it's optional but will return nothing
var x = 10;
function optionalReturnValue(){
    x += 10;
}
console.log(x)
