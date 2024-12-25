// Elements
let daysElement = document.querySelector(".days");
let hoursElement = document.querySelector(".hours");
let minutesElement = document.querySelector(".minutes");
let secondsElement = document.querySelector(".seconds");

// Set the target date and time (30 days from now in this example)
let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30); // Add 30 days

let counter = setInterval(() => {
  let now = new Date();

  // Calculate the time difference in milliseconds
  let timeDifference = targetDate.getTime() - now.getTime();

  if (timeDifference < 0) {
    // Timer has expired
    clearInterval(counter);
    daysElement.innerHTML = "0";
    hoursElement.innerHTML = "0";
    minutesElement.innerHTML = "0";
    secondsElement.innerHTML = "0";
    console.log("Countdown finished!");
    return;
  }

  // Calculate days, hours, minutes, and seconds
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the values, padding with zeros if necessary
  daysElement.innerHTML = days.toString().padStart(2, '0');
  hoursElement.innerHTML = hours.toString().padStart(2, '0');
  minutesElement.innerHTML = minutes.toString().padStart(2, '0');
  secondsElement.innerHTML = seconds.toString().padStart(2, '0');

}, 1000);
