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