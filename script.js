// Write a JavaScript program that counts the number of words in a given sentence, excluding extra spaces, using a loop.

// Input: “I have a book”
// Output: 4

function countWords(sentence) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            if (inWord) {
                inWord = false;
            }
        } else {
            if (!inWord) {
                count++;
                inWord = true; 
            }
        }
    }

    return count;
}
// Example
let input = "I have a book";
let output = countWords(input);
console.log(output)

// Extra example
let In = "This is the biggest garden"
let Out = countWords(In);
console.log(Out)