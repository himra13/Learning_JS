var hello = 'hello';
if (hello == 'hello'){
   console.log('this is true') 
}
else{
    console.log('this is false')
}

// Strict equal operator ===
var num1 = 10;
var str1 = '10';

// double equal operator convert type first(eval before comparison )
if (num1 == str1){
    console.log("it's the same")
}
else{
    console.log("it's not the same")
}

if (num1 === str1){
    console.log("it's the same")
}
else{
    console.log("it's not the same")
}

// inverse of equality operator
// - != is the inverse of == 
// - != = is the inverst of ===