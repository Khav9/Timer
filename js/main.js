function showDate() {
  let today = new Date();
  // create 6 variables to store Hours, Minutes, Seconds, Date, Months and Year.
  let hour = today.getHours();
  let Minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let date = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  // check this website : https://www.w3schools.com/js/js_date_methods.asp
  // note:
  // the value of month is return us as number of index for each month so you can use it with array months to get value
  // the hours is return us as 0 - 23 (make sure it show us in 12-hour format)

  if(hour > 12){
    hour -= 12
  }

  // add text content to hourElement, minElement, secElement 
  hourElement.textContent = hour;
  minElement.textContent = Minutes;
  secElement.textContent = seconds;
  // add text content to dateElement as format(date month year)
  // ex: 01 January 2024 

  dateElement.textContent= date + " "+ months[month] + " "+ year ;

  // dateElement.textContent= `${date} ${months[month]} ${year}`
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const hourElement = document.querySelector("#hour");
const minElement = document.querySelector("#minute");
const secElement = document.querySelector("#second");
const dateElement = document.querySelector("#date");

setInterval(showDate, 1000);
