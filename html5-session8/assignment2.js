var login = document.querySelector('#login'),
    signin = document.querySelector('#signin'),
    signupform = document.querySelector('#signupform'),
    userloginform = document.querySelector('#userloginform'),
    loginButton = document.querySelector('#userlogin'),
    saveUser = document.querySelector('#save');

login.addEventListener('click',function(){
    userloginform.style.display='block';
     signupform.style.display='none';
});

signin.addEventListener('click',function(){ 
    signupform.style.display='block';
    userloginform.style.display='none';   
});

loginButton.addEventListener('click',function(){
    var uem = document.querySelector("#useremail").value;
    var upd = document.querySelector("#userpassword").value;
    //alert(uem + " " + upd);
    var userLogged ='';
    for(var temp in localStorage){ 
        if(upd==temp && uem==localStorage[temp]){
           for(var temp2 in localStorage){
               if(uem==temp2){
                   userLogged=localStorage[temp2];
               }
           } 
        }
         //alert(temp + ": " + localStorage[temp]);
    }
    if(userLogged!=''){
        alert(userLogged + " is logged User!");
    }else{
        alert("Invalid User!");
    }
    userloginform.style.display='none';
});

saveUser.addEventListener('click',function(){
    var un = document.querySelector("#userName").value;
    var em = document.querySelector("#email").value;
    var pd = document.querySelector("#password").value;
    if(un && em && pd){
        localStorage.setItem(em,un);
        localStorage.setItem(pd,em);
    }   
    signupform.style.display='none';
});


