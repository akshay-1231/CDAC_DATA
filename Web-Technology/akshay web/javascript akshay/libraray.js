'use strict'

class auth{
    constructor(){
        this.details=[{
            email:"akshayprajapati424206@gmail.com",
            password:'adf@345P',
        },{
           email:"ajayprajapati424206@gmail.com",
            password:'ajy@345R',
        },{
             email:"shyamprajapati424206@gmail.com",
            password:'shy@432S',
        }];
    }

    checkemail(emailid){
          console.log(emailid);
          var exp =/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
          var result=exp.test(emailid);
          return result;
    }
    checkpassword(password){
        var exp=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$]).{4,12}$/;
        var result=exp.test(password);
        return result;
    }
    checkemailandpassword(){

    }
}

export default auth;