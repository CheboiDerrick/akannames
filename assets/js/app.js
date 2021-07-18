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

//function to assign the aka name based on the value d returned
let assignAkan=() =>{
    getDay();
    if (gender=="Female") {
        akanName=akanFemale[d];
        messageDisplay='Your Akan Name is '+ <strong>+<em>+akanName+ </em>+</strong>+ ', meaning female born on  '+ userDate.toLocaleString('en-us', { weekday: 'long' })
        console.log(messageDisplay);
        document.getElementById("display").innerHTML = messageDisplay;
    }
    else {
        akanName=akanMale[d];
        messageDisplay='Your Akan Name is '+ akanName+ ', meaning a male born on  '+ userDate.toLocaleString('en-us', { weekday: 'long' });
        console.log(messageDisplay);
        document.getElementById("display").innerHTML = messageDisplay;
    }
}

//function to validate the user input and initialize whole program
let validateInput= () => {
    getInputs();
    if (userDate>new Date()||isNaN(userDate)){
        alert(`Enter a correct date`);
    }
    else if (gender=='default') {
        alert('Please select your gender');
    }
    else {
        assignAkan();
    }
}

