let num=18;
function factorialCalculator(number){
  let f = 1;
    for (let i = 1; i <= number; i++) {
        f *= i;
    }
    return f;
}
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);