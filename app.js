// selecting item that we need
const btn = document.querySelector(".submit");
let chosenDate = new Date(document.getElementById("date").value);
let birthMonth, birthDate, birthYear, birthhour, birthMinutes;
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let personDetail = {
    year: chosenDate.getFullYear(),
    month: chosenDate.getMonth(),
    date: chosenDate.getDate(),
    hour: chosenDate.getHours(),
    Minutes: chosenDate.getMinutes(),
};
let todayDate = new Date();
currentYear = todayDate.getFullYear();
currentMonth = todayDate.getMonth();
currentDate = todayDate.getDate();
currenthour = todayDate.getHours();
currentMinutes = todayDate.getMinutes();
btn.addEventListener("click", calc);
function calc() { let today = new Date();
    let inputDate = new Date(document.getElementById("date").value);
    let birthMonth,birthDate,birthYear,birthhour,birthmin;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear(),
        hour:inputDate.getHours(),
        min:inputDate.getMinutes(),
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();
    let currentHour = today.getHours();
    let currentmin = today.getMinutes();

    if(
        birthDetails.year > currentYear ||
        ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-","-",'-');
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    
        birthhour= currentHour 
    
     
      
    
    
     birthmin=  currentmin 
    
    
    displayResult(birthDate,birthMonth,birthYear,birthmin,birthhour);
}
function displayResult(bDate,bMonth,bYear,bhour,bmin){
    document.getElementById("year").textContent = bYear;
    document.getElementById("month").textContent = bMonth;
    document.getElementById("day").textContent = bDate;
    document.getElementById("hour").textContent = bhour;
    document.getElementById("minets").textContent = bmin;
}
// working function
// otherDate = new Date();
// function calculateAge(birthDate, otherDate) {
//   birthDate = new Date(birthDate);
//   otherDate = new Date();

//   var years = otherDate.getFullYear() - birthDate.getFullYear();

//   if (
//     otherDate.getMonth() < birthDate.getMonth() ||
//     (otherDate.getMonth() == birthDate.getMonth() &&
//       otherDate.getDate() < birthDate.getDate())
//   ) {
//     years--;
//   }

//   return years;
// }
// console.log(calculateAge("02/24/1999", otherDate));
// if (
//     personDetail.year > currentYear ||
//     (personDetail.month > currentMonth && personDetail.year == currentYear) ||
//     (personDetail.date > currentDate &&
//       personDetail.month == currentMonth &&
//       birthDetails.year == currentYear)
//   ) {
//     alert("Not Born Yet");
//     displayResult("-", "-", "-");
//     return;
//   }
//   birthYear = currentYear - personDetail.year;
// }
// if (currentMonth >= personDetail.month) {
//   birthMonth = currentMonth - personDetail.month;
// } else {
//   birthYear--;
//   birthMonth = 12 + currentMonth - personDetail.month;
// }
// if (currentDate >= personDetail.date) {
//   birthDate = currentDate - personDetail.date;
// } else {
//   birthMonth--;
//   let days = months[currentMonth - 2];
//   birthDate = days + currentDate - personDetail.date;
//   if (birthMonth < 0) {
//     birthMonth = 11;
//     birthYear--;
//   }
//   if (currenthour >= personDetail.hour) {
//     birthhour = currenthour - personDetail.hour;
//   }
//   if (currentMinutes >= personDetail.Minutes) {
//     birthMinutes = currentMinutes - personDetail.Minutes;
//   }
//   rederInformation(birthMonth, birthDate, birthYear, birthhour, birthMinutes);
