// for- disply input
function pressNumberButton(number, numberId) {
    const numberInputId = document.getElementById(numberId);
    numberInputId.addEventListener('click', function () {
        const displayNumber = document.getElementById('display-number');
        displayNumber.innerText = displayNumber.innerText + number;

    });

}
function result(btnId) {
    const resultBtn = document.getElementById(btnId);
    resultBtn.addEventListener('click', function () {
        const displayNumber = document.getElementById('display-number');
        const displayOutput = eval(displayNumber.innerText);
        displayNumber.innerText = displayOutput;


    })

}

function pressCbtn(btnId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const clearDisplayNumber = document.getElementById('display-number');
        clearDisplayNumber.innerText = '';


    })
}
function pressACbtn(btnId) {
    document.getElementById(btnId).addEventListener('click', function () {

        const clearDisplayNumber = document.getElementById('display-number');
        clearDisplayNumber.innerText = '';
        const clearDisplayText1 = document.getElementById('display-info-1');
        clearDisplayText1.innerText = '';
        

    })

}
function pressInfoBtn(btnId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const clearNumber1 = document.getElementById('display-info-1');
        clearNumber1.innerText = `develop by Yasin Khan Rabbi`;
        const clearDisplayNumber = document.getElementById('display-number');
        clearDisplayNumber.innerText = `This Calculator perform operation`;

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
pressNumberButton('+', 'sum');
pressNumberButton('-', 'sub');
pressNumberButton('*', 'mul');
pressNumberButton('/', 'div');
pressNumberButton('%', 'mod');
//equal btn
result('result');
//  AC btn
pressCbtn('clear');
//  C btn
pressACbtn('ac');
// 
// info btn
pressInfoBtn('info');

