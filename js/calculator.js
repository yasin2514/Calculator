// for- disply input
function pressNumberButton(number, numberId) {
    const numberInputId = document.getElementById(numberId);
    numberInputId.addEventListener('click', function () {
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
function pressEqualButton(btnId) {
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

        const expression = document.getElementById('display-operator');
        const expressionValue = expression.innerText;

        if (expressionValue == '+') {
            const totalResult = getNumber1Value + getNumber2Value;
            document.getElementById('display-result').innerText = totalResult;

        }
        else if (expressionValue == '-') {
            const totalResult = getNumber1Value - getNumber2Value;
            document.getElementById('display-result').innerText = totalResult;

        }
        else if (expressionValue == '*') {
            const totalResult = getNumber1Value * getNumber2Value;
            document.getElementById('display-result').innerText = totalResult;

        }
        else if (expressionValue == '/') {
            const totalResult = getNumber1Value / getNumber2Value;
            document.getElementById('display-result').innerText = totalResult;

        }
        else {
            const totalResult = getNumber1Value % getNumber2Value;
            document.getElementById('display-result').innerText = totalResult;

        }

    })
}
function pressCbtn(btnId) {
    document.getElementById(btnId).addEventListener('click', function () {

        const clearDisplayNumber = document.getElementById('display-number');
        clearDisplayNumber.innerText = '';
        const clearDisplayText1 = document.getElementById('display-info-1');
        clearDisplayText1.innerText = '';
        const clearDisplayText2 = document.getElementById('display-info-2');
        clearDisplayText2.innerText = '';


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
        const clearDisplayNumber = document.getElementById('display-number');
        clearDisplayNumber.innerText = '';
        const clearDisplayText1 = document.getElementById('display-info-1');
        clearDisplayText1.innerText = '';
        const clearDisplayText2 = document.getElementById('display-info-2');
        clearDisplayText2.innerText = '';

    })

}
function pressInfoBtn(btnId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const clearNumber1 = document.getElementById('display-info-2');
        clearNumber1.innerText = `develop by Yasin Khan Rabbi`;
        const clearDisplayNumber = document.getElementById('display-info-1');
        clearDisplayNumber.innerText = `This Calculator perform operation Between Two Numbers`;

    })
}

// all number btn
pressNumberButton(0, 'zero');
pressNumberButton(1, 'one');
pressNumberButton(2, 'two');
pressNumberButton(3, 'three');
pressNumberButton(4, 'four');
pressNumberButton(5, 'five');
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
//equal btn
pressEqualButton('result');
//  AC btn
pressCbtn('clear');
//  C btn
pressACbtn('ac');
// 
// info btn
pressInfoBtn('info');

