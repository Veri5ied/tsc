"use strict";
function checkNumStrBool(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const n1 = 10;
const n2 = 20;
const showResult = true;
const phrase = "The result is: ";
checkNumStrBool(n1, n2, showResult, phrase);
