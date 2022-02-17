function checkNumStrBool(n1, n2, showResult, output) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var n1 = 10;
var n2 = 20;
var showResult = true;
var output = "The result is: ";
checkNumStrBool(n1, n2, showResult, output);
