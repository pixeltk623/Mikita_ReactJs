/* class Employee { // Class Name
  
    //

    userName = 'Sharvan123';
    email = 's@gmail.com';

    getName() {
        console.log('Hello This is Kumar');
    }
}

let emp1 = new Employee;

console.log(emp1);

console.log(emp1.userName);

console.log(emp1.email);


emp1.getName();

*/

// class Employee {

//     setName(name = 'Kumar') {
//         this.name = name;
//     }

//     getName() {

//         return this.name;
//     }

//     setEmail(email='s@gmail.com') {
//         this.email = email;
//     }

//     getEmail() {
//         return this.email;
//     }

//     setMobile(mobile = '9835401515') {
//         this.mobile = mobile;
//     }

//     getMobile() {
//         return this.mobile;
//     }

//     setAddress(address='Baroda') {
//         this.address = address;
//     }

//     getAddress() {
//         return this.address;
//     }

//     getFullDetails() {

//         return `My Name is ${this.name} and emailId is ${this.email}`;
//     }
// }



// function formDataCollect() {
    
//     let userName = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let mobile = document.getElementById('mobile').value;
//     let address = document.getElementById('address').value;
    

//     let emp2 = new Employee;

//     emp2.setName(userName);
//     emp2.setEmail(email);
//     emp2.setMobile(mobile);
//     emp2.setAddress(address);

//     //console.log(emp2);

//     // console.log(emp2.getName());
//     // console.log(emp2.getEmail());
//     // console.log(emp2.getMobile());
//     // console.log(emp2.getAddress());


//     console.log(emp2.getFullDetails());

//     return false;
// }


// class Car {

//     setCarName(carN) {
//        // console.log(carN);

//        this.carN = carN;
//     }

//     getCarName() {
//         console.log(this.carN);
//     }


//     getAllCars() {
//         console.log("My Car Name is "+ this.carN);
//     }

// }


// let carName = 'BMW';

// let obj = new Car();

// obj.setCarName(carName);

// obj.getCarName();


// obj.getAllCars();



// class Employee {


//     constructor(name,email,mobile,address) {
//         this.name = name;
//         this.email = email;
//         this.mobile = mobile;
//         this.address = address;
//     }
    
//     getName() {

//         return this.name;
//     }

    
//     getEmail() {
//         return this.email;
//     }

    

//     getMobile() {
//         return this.mobile;
//     }

    
//     getAddress() {
//         return this.address;
//     }

//     getFullDetails() {

//         return `My Name is ${this.name} and emailId is ${this.email}`;
//     }
// }



// function formDataCollect() {
    
//     let userName = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let mobile = document.getElementById('mobile').value;
//     let address = document.getElementById('address').value;
    

//     let emp2 = new Employee(userName,email,mobile,address);

//     console.log(emp2.getName());

//     return false;
// }


// function addOfTwoNumber(x,y) {
//     return x+y;
// }

// console.log(addOfTwoNumber(5,8));




// let x = function(x,y) {
//     return x+y;
// }

// console.log(x(5,9))





//Using Arrow Function

// let x = (x,y) => x+y;

// console.log(x(5,9));


// let greet = x => console.log('Hello This is Kumar');

// greet();


// class Company {

//     userName = 'test123';
//     password = '54654564';
//     companyName = 'Tech M';

//     income = '465465';

//     roi = '1456';

    
//     getComapnyName() {
//         console.log('Welcome To Softnice');
//     }

//     getComapny() {
//         return "Welcome To TCS";
//     }

//     getFullDetailsOfCompany() {

//         //console.log (` Company Name is ${this.companyName} ` );

//         //console.log('Company Name is  '+this.companyName+' and userName is '+this.userName );

//     }

//     calculateCompanyIncome() {

//         return "Total Income is "+this.income+this.roi;
//     }

//     calculation() {

//         return `Total Income is ${parseInt(this.income) + parseInt(this.roi)}`;
//     }

//     setEmployeeName(ename) {
//         this.ename = ename;
//     }

//     getEmployeeName() {
//         return this.ename;
//     }

//     setEmployeeEmail(email) {
//         this.email = email;
//     }

//     getEmployeeEmail() {
//         return this.email;
//     }


//     getFullDetails() {
//         return `Employee Name is ${this.ename} and Email is ${this.email}`;
//     }
// }

// let companyObject = new Company;

/*companyObject.getComapnyName();

console.log(companyObject.getComapny());

let cname = companyObject.getComapny();


console.log(cname);*/


// console.log(companyObject.companyName);

// console.log(companyObject.password);

// console.log(companyObject.userName);

// companyObject.getFullDetailsOfCompany();

// console.log(companyObject.calculateCompanyIncome());


// console.log(companyObject.calculation());

// companyObject.setEmployeeName('Sharvan');
// companyObject.setEmployeeEmail('Sharvan@gmail.com');


// console.log(companyObject.getEmployeeName());
// console.log(companyObject.getEmployeeEmail());
// console.log(companyObject.getFullDetails());

// class Company { 

//     constructor(ename, email) {
      
//       this.ename = ename;

//       this.email = email;

//     }

//     getEmployeeName() {
//         return this.ename;
//     }

//     getEmployeeEmail() {
//         return this.email;
//     }

//     getFullDetails() {
//         return `Employee Name is ${this.ename} and Email is ${this.email}`;
//     }



// }

// let companyObj = new Company('Sharvan', 's@gmail.com');

// console.log(companyObj.getEmployeeEmail());



// Form Validation using Class and object

// Required => name

// Email => Regix 
//Requred