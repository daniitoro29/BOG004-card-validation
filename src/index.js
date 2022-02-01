import validator from "./validator.js";
document.getElementById("btnValidation").addEventListener("click", () => {
  let tcNumber = document.getElementById("numberCard").value;
  if (tcNumber=== "") {
    alert("Upssss, no has ingresado tu TC");
  } else{
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
  }
});
document.getElementById("btnThree").addEventListener("click",() =>{
  document.getElementById("oneSection").style.display="block"
});