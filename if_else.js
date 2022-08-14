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

function multipleCriteria(val){
    if (val > 10 && val <20){
        return 'yes'
    }
    else{
        return 'false'
    }
}
console.log(multipleCriteria(25))

function orStatement(val){
    if (val < 10 || val > 20){
        return true
    }
    else {
        return false
    }
}
console.log(orStatement(15))

function elseIf(val){
    if (val > 10){
        return 'greater than 10'
    }
    else if(val < 5) {
        return 'less than 5'
    }
    else {
        return 'between 5 and 10'
    }
}
console.log(elseIf(7))

// chain if else statement

function chainIfElse(val){
    if (val < 5){
        return 'tiny'
    }
    else if (val < 10){
        return 'small'
    }
    else if (val < 15){
        return 'medium'
    }
    else if (val < 20){
        return 'Large'
    }
    else {
        return 'Humongous'
    }
}
console.log(chainIfElse(100))

// switch statement, it's case when in sql
// adding else statement inside switch statement
 // switch statement note, if you don't input break the code will just keep going and assign new answer value to your variable.
function testSwitch(val){
    var answer = "";
    switch (val){
        case 1:
            answer = 'alpha'
            break;
        case 2:
            answer = 'beta'
            break;
        case 3:
            answer = 'gamma'
            break;
        case 4:
            answer = 'theta'
            break;
        default:
            answer = 'mismatched input'
            break;
    }
    return answer
}
console.log(testSwitch('hello'))