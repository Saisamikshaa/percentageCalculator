const calculatePercentage = (number,percent)=>{
    let percentCalculate = number/100*percent;

    return percentCalculate;
}
let calculator = calculatePercentage(500,25);
console.log(calculator);