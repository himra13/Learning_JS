 var simpleArray = ['hello', 7];
 console.log(simpleArray)

//  nested array or multi-dimension array
var multiDimArray = [
    ['hello', 7],
    ['hey', 3]
]
console.log(multiDimArray)
console.log(multiDimArray[0])
console.log(multiDimArray[0][0])

// Manipulate Array
// ----------------------------------

// modify object in array
simpleArray[0] = 'hello!'
console.log(simpleArray)

// push = append to the last item of the array
simpleArray.push(["happy", 100])
console.log(simpleArray)

// pop = remove last item from array
simpleArray.pop()
console.log(simpleArray)

// shift = remove the first item from array
simpleArray.shift()
console.log(simpleArray)

// unshift = append element to the beginning of the array
simpleArray.unshift("happy")
console.log(simpleArray)

// ----------------------------------