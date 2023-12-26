// Remove Repeated Characters
// Create a function that will remove any repeated character(s) in a word passed to the function.
// Not just consecutive characters, but characters repeating anywhere in the input.

// Examples

// unrepeated(""hello"") ➞ ""helo""

// unrepeated(""aaaaa"") ➞ ""a""

// unrepeated(""WWE!!!"") ➞ ""WE!""

// unrepeated(""call 911"") ➞ ""cal 91""
function unrepeated(word){
    let newWord = "";
    for (let i=0;i<word.length;i++){
        if (!newWord.includes(word[i])){
            newWord += word[i];
        }
    }
    return newWord;
    }
    console.log(unrepeated("helllllllo"))
