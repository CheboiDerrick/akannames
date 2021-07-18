//Global variable declaration
let CC;
let YY;
let MM;
let DD;
let gender;
let dateInput;
let userDate;

//Array storing names for both male and female akan names
const akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//Function to get the input from the user
let getInputs=() =>{
    gender=document.getElementById("gender").value;
    console.log(gender);
    dateInput= document.getElementById('date').value;
    console.log(dateInput);
    userDate= new Date(dateInput);
    console.log(userDate);
}

//Function to get the day of the week d
let getDay=() =>{
    getInputs();
    console.log(userDate);
    CC = userDate.getFullYear();
    console.log(CC);
    CC = CC.toString().substr(0, 2);
    console.log(CC);
    YY = userDate.getFullYear();
    YY = YY.toString().substr(2, 4);
    console.log(YY);
    MM = userDate.getMonth();
    console.log(MM);
    DD = userDate.getDate();
    console.log(DD);
    d = userDate.getDay();
    console.log(d);
    day = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    day=Math.round(day);
    return d;
}