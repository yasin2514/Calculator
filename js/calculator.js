// for- disply input
function pressNumberButton(number, numberId) {
    const numberInputId = document.getElementById(numberId);
    numberInputId.addEventListener('click', function () {
        // console.log('clicked btn');

        const displayNumber = document.getElementById('display-number');
        displayNumber.innerText = displayNumber.innerText + number;
        const displayNumberValue = displayNumber.innerText;

    });

}
function pressOperatorButton(operator, operatorId, isCalculation) {
    const operatorInputId = document.getElementById(operatorId);

    operatorInputId.addEventListener('click', function () {
        const displayNumber = document.getElementById('display-operator');
        displayNumber.innerText = operator;
        if (isCalculation == 'add' || isCalculation == 'sub' || isCalculation == 'mul' || isCalculation == 'div' || isCalculation == 'mod') {

            const displayNumber = document.getElementById('display-number');
            const displayNumberValue = displayNumber.innerText;
            displayNumber.innerText = '';
            const storeNumber1 = document.getElementById('store-number1');
            storeNumber1.innerText = displayNumberValue;

        }
    });


}
function pressEqualButton(btnId, expression) {
    const resultBtn = document.getElementById(btnId)
    resultBtn.addEventListener('click', function () {
        // for number-1
        const getNumber1 = document.getElementById('store-number1');
        const getNumber1Text = getNumber1.innerText;
        const getNumber1Value = parseFloat(getNumber1Text);
        // console.log('number1:', storeNumber1Value);

        // for number-2
        const getNumber2 = document.getElementById('display-number');
        const getNumber2Text = getNumber2.innerText;
        const getNumber2Value = parseFloat(getNumber2Text);
        const storeNumber2 = document.getElementById('store-number2');
        storeNumber2.innerText = getNumber2Value;

        getNumber2.innerText = '';
        // console.log('number2:', storeNumber2Value);
        if (expression == 'sum') {
            const sumTotal = getNumber1Value + getNumber2Value;
            // console.log('total', sumTotal);
            document.getElementById('display-result').innerText = sumTotal;

        }

    })
}
function pressACbtn(btnId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const clearNumber1 = document.getElementById('store-number1');
        clearNumber1.innerText = '';
        const clearNumber2 = document.getElementById('store-number2');
        clearNumber2.innerText = '';
        const clearOperator = document.getElementById('display-operator');
        clearOperator.innerText = '';
        const clearResult = document.getElementById('display-result');
        clearResult.innerText = '';

    })
}
//equal btn
pressEqualButton('result', 'sum');
//  AC btn
pressACbtn('ac');
// all number btn
pressNumberButton(0, 'zero');
pressNumberButton(1, 'one');
pressNumberButton(2, 'two');
pressNumberButton(2, 'three');
pressNumberButton(3, 'four');
pressNumberButton(4, 'five');
pressNumberButton(6, 'six');
pressNumberButton(7, 'seven');
pressNumberButton(8, 'eight');
pressNumberButton(9, 'nine');
pressNumberButton('.', 'float');
// operator btn
pressOperatorButton('+', 'sum', 'add');
pressOperatorButton('-', 'sub', 'sub');
pressOperatorButton('*', 'mul', 'mul');
pressOperatorButton('/', 'div', 'div');
pressOperatorButton('%', 'mod', 'mod');


