import validator from "./validator.js";
document.getElementById("btnValidation").addEventListener("click", () => {
  let tcNumber = document.getElementById("numberCard").value;
  if (tcNumber=== "") {
    alert("Upssss, no has ingresado tu TC");
  } else{
    if(validator.isValid(tcNumber)){
      alert("La tarjeta es válida")
    } else {
      alert("Upsss tu tajeta es inválida, intenta con otra tarjeta")
    }
    let maskifyNumber = validator.maskify(tcNumber);
    document.getElementById("numberCard").value = maskifyNumber;
  }
});