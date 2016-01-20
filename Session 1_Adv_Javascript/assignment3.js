function FormValidation(name,email,phone){
  var generateResult = function(address){
      var r = false;
      if(name && phone && name!=='' && phone!==''){
          r=validate(email);
      }
      alert('You entered: '+ name + ', ' + email + ', ' +phone + ', ' + address);
      return r;
  }
  return generateResult;
}

var FormValidation = FormValidation('Niti','test@yahoo.com','');
alert(FormValidation('Bangalore,India'));
      

function validate(email_id){
    var emailPattern = /^[a-zA-Z_\.\-]+@[a-zA-Z_\-\.]+?\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email_id);
}

