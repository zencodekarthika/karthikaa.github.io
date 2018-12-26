var firstname = "karthika";
var lastname = "prabakaran";
console.log(firstname.concat(lastname));

var Str1 = 'Today is Monday , It is cloudy';
var Str2 = Str1.replace(/,/, 'and');
console.log(Str2);

replace();
function replace() {
    var Str1 = 'Today is Monday and It is cloudy';
    var Str2 = Str1.replace(/Monday/, 'saturday');
    console.log(Str2);
}

function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];
    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("all the letter are in small case"));

function Palindrome(str) {
    var normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
    return normalized.join('') === normalized.reverse().join('');
}
if (Palindrome("NITIN.")) {
    console.log("True");
} else {
    console.log("False");
}

function count(string, char) {
    var re = new RegExp(char, "gi");
    return string.match(re).length;
}
var str = 'search the  no of occurences OF a word in a sentences';
console.log(count(str, 'OF'));

var str = "Sample String";
var arr = str.split(" ");
arr.reverse();
str = arr.join(" ");
var str = "Reverse the Sentence";
console.log(str.split(/\s/).reverse().join(" "));
Replaceword();
function Replaceword() {
    var p = 'Find the word and print the result';
    var regex = /Find/gi;
    console.log(p.replace(regex, 'Replace'));
}