import validator from "./validator.js";
document.getElementById("btnValidation").addEventListener("click", () => {
  let tcNumber = document.getElementById("numberCard").value;
  if (tcNumber=== "") {
    alert("Upssss, no has ingresado tu TC");
  } else{ 
    if(validator.isNumber(tcNumber)){
      let maskifyNumber = validator.maskify(tcNumber);
      document.getElementById("numberCard").value = maskifyNumber;
      if(validator.isValid(tcNumber)){
        document.getElementById("oneSection").style.display="none" 
        document.getElementById("twoSection").style.display="block"
        document.getElementById("tcValid").innerText = maskifyNumber;
      } else {
        document.getElementById("oneSection").style.display="none" 
        document.getElementById("threeSection").style.display="block"
        document.getElementById("tcInvalid").innerText = maskifyNumber;
      }
    }else{
      myFunction("Por favor ingresa un número de TC válido");
      document.getElementById("numberCard").value="";
    }
  }
});
document.getElementById("btnTwo").addEventListener("click",() =>{
  document.getElementById("twoSection").style.display="none"
  document.getElementById("oneSection").style.display="block"
  document.getElementById("numberCard").value="";
});
document.getElementById("btnThree").addEventListener("click",() =>{
  document.getElementById("threeSection").style.display="none"
  document.getElementById("oneSection").style.display="block"
  document.getElementById("numberCard").value="";
});
let myFunction = (msj) => {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
x.innerText=msj
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}