var result = (function(email_id){
    var emailPattern = /^[a-zA-Z_\.\-]+@[a-zA-Z_\-\.]+?\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email_id);
    })('xyzg@yahoo.com');
console.log(result);
