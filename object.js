// looks pretty similar to python dictionary
var testObj = {
    "hey": "hello",
    "hello": "heaven",
    "life": 'death'
}
console.log(testObj.hey)
console.log(testObj.life)

var keyName = 'hey';
console.log(testObj[keyName])

x = testObj;
x.hello = 'hell' // change property value
console.log(x['hello'])
delete x.life
console.log(x['life']) // data should show undefined