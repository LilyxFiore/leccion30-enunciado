var form = document.getElementById("form-contact");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm(){
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  validateName(name);
  validatePhone(phone);
  validateEmail(email);
  validateMessage(message);

  name.addEventListener("blur", function(){
    document.getElementById("m-phone").innerHTML=" ";
  })
  }

function validatePhone(phone){
  if(phone.value.length==0 || /^\s+|\s+$/.test(phone.value)){
    document.getElementById("m-phone").innerHTML="Please enter your number phone.";
    return false;
  }
  if(!(/[9]{1}[0-9]{8}/.test(phone.value))){
    document.getElementById("m-phone").innerHTML="Number phone no valid.";
    return false;
  }
  else{
    document.getElementById("m-phone").innerHTML=" ";
  }
}

function validateName(name){
  /** Validacion para nombre**/
  if(name.value.length==0 || /^\s+|\s+$/.test(name.value)){
    document.getElementById("m-name").innerHTML="Please enter your name.";
    return false;
  }
  if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(name.value)){
    return false;
    }
  else{
    document.getElementById("m-name").innerHTML=" ";
  }
}

function validateEmail(email){
  /** Validacion para nombre**/
  if(email.value.length==0 || /^\s+|\s+$/.test(email.value)){
    document.getElementById("m-email").innerHTML="Please enter your email.";
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(email.value))){
    document.getElementById("m-email").innerHTML="Invalid. Example name@dominio.com";
    return false;
    }
  else{
    document.getElementById("m-email").innerHTML=" ";
  }
}

function validateMessage(message){
  if(message.value.length==0 || /^\s+|\s+$/.test(message.value)){
    document.getElementById("m-message").innerHTML="Please enter a message.";
    return false;
  }
  else{
    document.getElementById("m-message").innerHTML=" ";
  }
}
