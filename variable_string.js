var s1 = 'hello';

// escape character, backslash will join the text
// var myStr = "I am a "double quoted" string inside "double quoted"";
var myStr = "I am a \"double quoted\" string inside \"double quoted\"";
console.log(myStr)

var myStr2 = 'I am a "double quoted" string inside a single quoted';
console.log(myStr2)

/*
CODE OUTPUT
------------------
\' single quoted
\" double quoted
\\ backslash
\n new line
\t tab

*/
console.log("First line text\n\tSecond Line\nThird line \\")
var s2 = 'buddy';

console.log(s1 + " " + s2)
s1 += s2
console.log(s1)

// string with variables
var greetingMessage = 'hello ' + s2;
console.log(greetingMessage)

// find a length of the string, it does not include whitespace
greetingLength = greetingMessage.length;
console.log(greetingLength)

// bracket to find substring
console.log(greetingMessage[0])

// Strings are immutable, 
var immutableStr = 'Jello world!';
console.log(immutableStr)
immutableStr[0] = 'H' // we can't change part of the string due to immutability
console.log(immutableStr)

