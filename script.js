
function calculateAge(){

    let birth = new Date(document.getElementById("birthdate").value);
    let now = new Date();

    if(!birth) {
        document.getElementById("ageResult").innerHTML = "Please select a birth date!";
        return;
    }

    let diff = now - birth;

    let minutes = Math.floor(diff / (1000 * 60));
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let day = now.getDate() - birth.getDate();

    if(day < 0){
        months--;
        day += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if(months < 0){
        years--;
        months += 12;
    }

    document.getElementById("ageResult").innerHTML =
    years + " years, " + months + " months, " + day + " days<br>" +
    hours + " hours<br>" +
    minutes + " minutes<br>" +
    "Total days: " + days;
}

function convertMile(){

let mile = document.getElementById("mile").value;

let km = mile * 1.609;

document.getElementById("kmResult").innerHTML =
km + " KM";

}



function calculateDaysBetween(){
    let d1 = new Date(document.getElementById("date1").value);
    let d2 = new Date(document.getElementById("date2").value);

    if(!d1 || !d2){
        document.getElementById("daysBetweenResult").innerHTML = "Please select both dates!";
        return;
    }

    let diff = Math.abs(d2 - d1);
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("daysBetweenResult").innerHTML =
    "Difference: " + days + " days";
}


function calculateGPA(){
    let g1 = parseFloat(document.getElementById("grade1").value);
    let g2 = parseFloat(document.getElementById("grade2").value);
    let g3 = parseFloat(document.getElementById("grade3").value);

    if(isNaN(g1) || isNaN(g2) || isNaN(g3)){
        document.getElementById("gpaResult").innerHTML = "Please enter all grades!";
        return;
    }

    let gpa = (g1 + g2 + g3) / 3;
    document.getElementById("gpaResult").innerHTML = "Your GPA: " + gpa.toFixed(2);
}


function calculateDiscount(){
    let price = parseFloat(document.getElementById("originalPrice").value);
    let discount = parseFloat(document.getElementById("discountPercent").value);

    if(isNaN(price) || isNaN(discount)){
        document.getElementById("discountResult").innerHTML = "Please enter price and discount!";
        return;
    }

    let finalPrice = price - (price * discount / 100);
    document.getElementById("discountResult").innerHTML = 
        "Final Price: " + finalPrice.toFixed(2);
}

function calculateBMI(){

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;

    if(!weight || !height){
        document.getElementById("bmiResult").innerHTML = "Enter weight and height";
        return;
    }

    let bmi = weight / (height * height);

    let message = "";
    let color = "";

    if(bmi < 18.5){
        message = "Underweight";
        color = "blue";
    }
    else if(bmi < 25){
        message = "Normal weight";
        color = "green";
    }
    else if(bmi < 30){
        message = "Overweight";
        color = "orange";
    }
    else{
        message = "Obese";
        color = "red";
    }

    document.getElementById("bmiResult").innerHTML =
        "<span style='color:" + color + "; font-weight:bold; font-size:18px'>" +
        "BMI: " + bmi.toFixed(2) + "<br>" +
        message +
        "</span>";
}

document.getElementById("calculateAgeBtn").addEventListener("click", calculateAge);
document.getElementById("calculateBMIBtn").addEventListener("click", calculateBMI);
document.getElementById("convertMileBtn").addEventListener("click", convertMile);
document.getElementById("calculateDaysBtn").addEventListener("click", calculateDaysBetween);
document.getElementById("calculateGPABtn").addEventListener("click", calculateGPA);
document.getElementById("calculateDiscountBtn").addEventListener("click", calculateDiscount);


function randomNumber(){

let min = Number(document.getElementById("min").value);
let max = Number(document.getElementById("max").value);

let result = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById("randomResult").innerText = result;

}


function generatePassword(){

let length = Number(document.getElementById("passLength").value);

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

let password = "";

for(let i = 0; i < length; i++){

password += chars[Math.floor(Math.random() * chars.length)];

}

document.getElementById("passResult").innerText = password;

}

