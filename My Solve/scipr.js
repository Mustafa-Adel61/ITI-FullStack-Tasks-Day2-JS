//!                 #task 1
alert("Welcome to my page")
var myArray=new Array(6);
myArray[0]="tip #1:Use let and const Instead of var"
myArray[1]="tip #2:Use let and const Instead of var"
myArray[2]="tip #3:Use let and const Instead of var"
myArray[3]="tip #4:Use let and const Instead of var"
myArray[4]="tip #5:Use let and const Instead of var"
myArray[5]="tip #6:Use let and const Instead of var"
let randomItem = myArray[Math.ceil(Math.random() * myArray.length)];
alert(`Tip of the day is ${randomItem}`)

//!                   #task 2
function myDate(){
    var date=new Date();
  //  document.write(date.toLocaleString());
    var ss= document.getElementById("currentDate").style.display="block";
    document.getElementById("currentDate").textContent=date.toLocaleString();
}


//!                   #task 3
function email(){
    var userEmail=prompt("Please Enter your Email : ");
    var counter=0;
    if(userEmail[0]=="@"||userEmail[length-1]=="@"){
        alert("Email Not Valid");
    }
    else{

        for(let i=1;i<userEmail.length-1;i++){
            if(userEmail[i]=="@"){
                counter++;
            }
        }
        if(counter==1){
            alert("Email Already Valid")
        }
        else{
            alert("Email Not Valid");
        }

    }
}


//!                   #task 4 and 5
//Full Name and email address
function regexNameEmail(){
   // debugger;
    const fullNameRegex = /^[A-Za-z]{3,}(?:\s[A-Za-z]{3,})*$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$/;            
    while(true){
        var name=prompt("Please Enter Your Full Name : ");
        var test =fullNameRegex.test(name);
        if(test==true){
            break;
        }
        else{
            alert("Please Enter Correct Name such as Mustafa Adel Frahat ")
        }

    }
    while(true){
        var email=prompt("Please Enter Your Email : ");
        var test =emailRegex.test(email);
        if(test){
            break;
        }
        else{
            alert("Please Enter Valid Email such as name@domain.com.eg ")
        }
    }
    document.getElementById("UserData").textContent="User Name : "+ name +"  User Email :"+email;
    document.getElementById("UserData").style.display="block";
   // document.write("User Name : "+ name +"User Email :"+email);
    
}


//!                   #task 6
var array=[60,100,10,15,85];
//sort array numerically descending
array.sort((a, b) => b - a);
console.log("Sorted Grades (Descending): ",array);
//find ترجع عنصر واحد يحقق الشرط
let highestGrade = array.find(grade => grade >= 100);
console.log("Highest Student Grade:", highestGrade);
//filter ترجع مجموعه ارقام تحقق الشرط
let below60 = array.filter(grade => grade < 60);
console.log("Students with Grades Below 60:", below60);


//!                   #task 7
let students =[

{ name: "Ali", degree: 95 },
{ name: "Omar", degree: 85 },
{ name: "Sara", degree: 98 },
{ name: "Mona", degree: 45 },
{ name: "Ahmed", degree: 55 }
];

//  a. Find the first student with a degree between 90 and 100
let topStudent = students.find(c => c.degree >= 90 && c.degree <= 100);
console.log("Student with degree between 90-100:", topStudent || "No matching student");

//  b. Get all students with a degree below 60
let failedStudents = students.filter(c => c.degree < 60);
console.log("Students with degree below 60:", failedStudents.length > 0 ? failedStudents : "No students failed");
//////////////////////////////////////
//push new element
students.push({ name: "Youssef", degree: 78 });

console.log("\nAll Students After Adding (using for...in):");
for (let index in students) {
console.log(`${students[index].name}: ${students[index].degree}`);
}

// d. Remove the last student using pop()
students.pop();

console.log("\nAll Students After Removing Last (using for...of):");
for (let student of students) {
console.log(`${student.name}: ${student.degree}`);
}

// e. Sort the array alphabetically based on student name
students.sort((a, b) => a.name.localeCompare(b.name));

console.log("\nStudents Sorted Alphabetically:");
students.forEach(student => console.log(`${student.name}: ${student.degree}`));


//!                   #task 8

function UserBirthDay(){
debugger;
var _date=prompt("Please Enter Your birthDay in the following format (DD - MM - YYYY) ex. 22-01-1999,")
var result=checkDate(_date);
alert(result);
}

function checkDate(_date){
console.log(_date[2]);
if(_date.length==10 && _date[2]=='-'&&_date[5]=='-'){
   
    let day=parseInt(_date.substring(0,2));
    let Month=parseInt(_date.substring(3,5));
    let year=parseInt(_date.substring(6,10));
    let date=new Date(year,Month-1,day);

    return "Your Birth Day in date string format :  "+ date.toDateString();
   // alert("Date is "+ sasa);
}
else{
    return "Date is not Valid !";
}
}

