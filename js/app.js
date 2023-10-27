    
                 // *********************pin generate*************************
function getRandimPin() {
    const generatePin = Math.round(Math.random()*10000);
    const pinString = generatePin + '';
    if (pinString.length === 4) {
        return generatePin;
    }else{
        console.log('pin is not 4 degite',generatePin);
        return getRandimPin();
    }
};

document.getElementById('btn-pin-generator').addEventListener('click', function(){
    const randomPin = getRandimPin();
    const pinScreen = document.getElementById('input-pin');
    pinScreen.value = randomPin;
});

                // ********************* type new pin *************************  

document.getElementById('numbers-type').addEventListener('click', function(event){
    const newTypeNumber = event.target.innerText;
    const numberDisplay = document.getElementById('number-display');
        const numberValue = numberDisplay.value;

    if (isNaN(newTypeNumber)=== false) {
        const allNumberValus =   numberValue + newTypeNumber;
        numberDisplay.value = allNumberValus;
    }
    else if (newTypeNumber == '<') {
        const splitNumber = numberValue.split('');
        splitNumber.pop();
        const remainingDigits = splitNumber.join('');
        numberDisplay.value = remainingDigits;
    }
    else if(newTypeNumber == 'C'){
        numberDisplay.value = '';
    }
});

document.getElementById('btn-submit').addEventListener('click', function(){
    const generatedPin = document.getElementById('input-pin');
    const generatedPinValue =generatedPin.value;
    const typePin = document.getElementById('number-display');
    const typePinValue =typePin.value;
    
    const matched =document.getElementById('pin-matched');
    const notMatched =document.getElementById('pin-not-matched');
    if (generatedPinValue === typePinValue) {
        matched.style.display="block";
        notMatched.style.display="none";
    }else{
        notMatched.style.display="block";
        matched.style.display="none";
    }
})
