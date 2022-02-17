function checkNumStrBool(
  n1: number,
  n2: number,
  showResult: boolean,
  output: string
) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const n1 = 10;
const n2 = 20;
const showResult = true;
const output = "The result is: ";

checkNumStrBool(n1, n2, showResult, output);
