let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = (validate) => {
    loginForm.classList.add('active');
}

window.onscroll = () => {
    // loginForm.classList.remove('active');
    if(window.scrollY > 0){
        // document.querySelector('.header').classList.add('active');
    }
    else{
        // document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 0){
        // document.querySelector('.header').classList.add('active');
    }else{
        // document.querySelector('.header').classList.remove('active');
    }
}

function validate(){

    if(document.myForm.uname.value.length<5 || document.myForm.uname.value.length>20){
        document.getElementById("uname").innerHTML = "Must contain 5-20 characters";
        uname.focus();
        return false;
    }

        var x=document.myform.email.value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
          alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          return false;  
          } 

    if(document.myForm.password1.value != document.myForm.password2.value){
        document.getElementById("pswd").innerHTML = "Your passwords do not match";
        pswd.focus();
        return false;
    }


}