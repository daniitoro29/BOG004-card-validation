const validator = {
  isValid: (creditCardNumber) => {
    console.log("El valor de tu TC es ", creditCardNumber);
    let creditCardNumberArray = creditCardNumber.split("");
/*     creditCardNumberArray.reverse();
    console.log(creditCardNumberArray); */
    let creditCardNumberArrayLength = creditCardNumberArray.length;
    let creditCardNumberInvertido = []
    for(let i = creditCardNumberArrayLength - 1 ; i >= 0; --i){
      creditCardNumberInvertido.push(creditCardNumberArray[i]);
    }
   /*  console.log(creditCardNumberInvertido); */
    for (let i = 0 ; i < creditCardNumberInvertido.length; i++){
      if (i % 2 == 0) { 
        creditCardNumberInvertido.push(creditCardNumberInvertido [i] * 2);
        console.log(creditCardNumberInvertido);
      }else{
        console.log("El número no es par");
      }
    }
  }
}
export default validator;
/* function viewsArrayImput(){
  let arrayInput = new Array();
  let inputsValues = document.getElementById("numberCard");
  namesValues = [].map.call(inputsValues,function(dataInput){
    arrayInput.push(dataInput.value);
  });  
  arrayInput.forEach(function(inputsValuesData){
    console.log("El dato es" + arrayInput);
  });
} */
/* let creditDate =  document.getElementById("numberCard").value;
const myArr = Array.from (creditDate); */
/* const isValid = [document.getElementById("numberCard").value];
console.log(isValid); 
isValid */
/* {() => saveCard} */

/* const validator = ()=> {
  const saveCard =()=> {
    let cardNumber = document.getElementById("numberCard").value;
    let arrayCard = cardNumber.split("");
    console.log("Hola Daniela");
  }
}
export default validator; */