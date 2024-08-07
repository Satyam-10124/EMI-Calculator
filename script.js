function calculateEMI() {
    var loanAmount = document.getElementById('loanAmount').value;
    var loanTerm = document.getElementById('loanTerm').value;
    var interestRate = document.getElementById('interestRate').value;

    if (!loanAmount || !loanTerm || !interestRate) {
        alert('Please enter all the fields.');
        return;
    }

    var principal = parseFloat(loanAmount);
    var term = parseInt(loanTerm);
    var rate = parseFloat(interestRate) / 100 / 12;

    var emi = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    var emiRounded = Math.round(emi * 100) / 100;

    document.getElementById('result').innerText = 'EMI: INR ' + emiRounded.toFixed(2);
}