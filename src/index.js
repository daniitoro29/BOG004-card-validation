import validator from './validator.js';


document.getElementById("btnValidation").addEventListener("click", () => {
  let tcNumber = document.getElementById("numberCard").value;
  if (document.getElementById("numberCard").value === "") {
    alert("Upssss, no has ingresado tu TC")
  }else{
    validator.isValid(tcNumber);

  }
  console.log("eL VALOR ES",tcNumber);
});