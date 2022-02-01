const validator = {
  isValid: (creditCardNumber) => {
    let creditCardNumberArray = creditCardNumber.split("");
    let creditCardNumberArrayLength = creditCardNumberArray.length;
    let creditCardNumberInvertido = [];
    for (let i = creditCardNumberArrayLength - 1; i >= 0; --i) {
      creditCardNumberInvertido.push(creditCardNumberArray[i]);
    }
    let arrayCreditCard = [];
    for (let i = 0; i < creditCardNumberInvertido.length; i++) {
      let currentNumber = parseInt(creditCardNumberInvertido[i]);
      if (i % 2 == 1) {
        currentNumber = currentNumber * 2;
        if (currentNumber > 9) {
          let currentNumberSplit = currentNumber.toString().split("");
          currentNumber =
            parseInt(currentNumberSplit[0]) + parseInt(currentNumberSplit[1]);
        }
      }
      arrayCreditCard.push(currentNumber);
    }
    let sumaNumberTC = 0;
    for (let i = 0; i < arrayCreditCard.length; i++) {
      sumaNumberTC = sumaNumberTC + arrayCreditCard[i];
    }
    let resultado;
    if (sumaNumberTC % 10 == 0) {
      resultado = true;
    } else {
      resultado = false;
    }
    return resultado;
  },
  
  maskify: (creditCardNumber) =>{
    let creditCardNumberMask = creditCardNumber.slice(0,creditCardNumber.length-4);
    let creditCardNumberNoMask = creditCardNumber.slice(-4);
    let creditCardNumberString = "";
    for(let i = 0; i < creditCardNumberMask.length; i++){
      creditCardNumberString += "#";
    }
    return creditCardNumberString+creditCardNumberNoMask;
  }
};
export default validator;
