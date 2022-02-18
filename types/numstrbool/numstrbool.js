function checkNumStrBool(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var n1 = 10;
var n2 = 20;
var showResult = true;
var phrase = "The result is: ";
checkNumStrBool(n1, n2, showResult, phrase);
