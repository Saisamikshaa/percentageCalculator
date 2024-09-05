// script.js
document.getElementById('calculateBtn').addEventListener('click', function() {
    const number = parseFloat(document.getElementById('number').value);
    const percent = parseFloat(document.getElementById('percent').value);

    if (!isNaN(number) && !isNaN(percent)) {
        const result = calculatePercentage(number, percent);
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Invalid input';
    }
});

const calculatePercentage = (number, percent) => {
    return (number / 100) * percent;
}
