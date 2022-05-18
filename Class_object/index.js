 
class Form {



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

    getFormMobile () {
        if(this.mobile==''){
            return false;
        } else {
            return this.mobile
        }
    }

    getFormAddress () {
        if(this.address=='') {
            return false;
        } else {
            return this.address
        }
    }
}
  
    function formValidation() {
        let uname = document.getElementById('uname').value;
        let email = document.getElementById('email').value;
        let regix = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        let mobile = document.getElementById('mobile').value;
        let address = document.getElementById('address').value;
        //console.log ( uname, email,mobile, address);

        let objectForm = new Form(uname,email,mobile,address);

        //console.log(objectForm.getFormName());
        //console.log(objectForm.getFormEmail());
        //console.log(objectForm.getFormMobile());
        //console.log(objectForm.getFormAddress());

        if (objectForm.getFormName()==false) {
            document.getElementById('e1').innerHTML = 'Name field is required';
            document.getElementById('e1').style.color = "red";
        } else {
            document.getElementById('e1').innerHTML = '';
        }

        if (objectForm.getFormEmail()==false) {
            document.getElementById('e2').innerHTML = 'Email field is required';
            document.getElementById('e2').style.color = 'red';
        } else {

            console.log(regix.test(email));

            if(regix.test(email)==false) {
                document.getElementById('e2').innerHTML = 'Email id is not-correct';
                document.getElementById('e2').style.color = 'red';
            } else {
                document.getElementById('e2').innerHTML = '';
            }
        }
    
        if (objectForm.getFormMobile()==false) {
            document.getElementById('e3').innerHTML = 'Mobile Number field is required';
            document.getElementById('e3').style.color = 'red';
        } else {
            document.getElementById('e3').innerHTML = '';
        }

        if (objectForm.getFormAddress()==false) {
            document.getElementById('e4').innerHTML = 'Address field is required';
            document.getElementById('e4').style.color = 'red';
        } else {
            document.getElementById('e4').innerHTML = '';
        }

        return false;
    }    

    let hello = (name,email,mobile) => `Hello ${name} and my Email Id is ${email} my Mobile Number is ${mobile}`;
    
    console.log(hello("mikita here", "m@gmail.com" ,553366221));

    // getFullDetail() {
    //     return `my name is ${parseInt(this.getFormName) + parseInt(this.getFormEmail)}`;
    // }

    // class user {
    //     userName = 'mikta';
    //     email = 'mikita@gmail.com'
    //     mobile = '525265325';
    //     address = 'vadodara';

    //     getUserAddress() {
    //         console.log('tower road vadodara');
    //     }

    //     getUser () {
    //         return "welcome to vadodara";
    //     }

    //     // getFullDetailsOfUser() {

    //     //             console.log (` user Name is ${this.userName} ` );
            
    //     //             console.log('user Name is  '+this.userName+' and email id is '+this.email);
            
    //     //         }

    //     setFormName(uname) {
    //         this.uname = uname;
    //     }
            
    //     getFormName() {
    //         return this.uname;
    //     }

    // }


   