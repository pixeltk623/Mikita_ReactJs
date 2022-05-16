 
class form {

    constructor (uname,email,mobile,address) {
        this.uname = uname;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
    }

    getFormName () {
        if(this.uname=='') {
            return false;
        } else {
            return this.uname;
        }
    }

    getFormEmail () {
        if(this.email=='') {
            return false;
        } else {
            return this.email
        }
    }
}
  
        function formValidation() {
            let uname = document.getElementById('uname').value;
            let email = document.getElementById('email').value;
        }    

        let objectForm = new form (uname,email);

        console.log(objectForm.getFormName());

        if (objectForm.getFormName()=='') {
            document.getElementById('e1').innerHTML = 'Name field is required';
        } else {
            document.getElementById('e1').innerHTML = '';
        }










    


