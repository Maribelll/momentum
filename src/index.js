// time js
const time = document.querySelector(".time");
const day = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const myname = document.querySelector(".myname");

//вывод времени
function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000); // обновление времени
  showGreeting();
  showDate();
}
function showDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const currentDate = date.toLocaleDateString("en-US", options);
  day.textContent = currentDate;
}

showTime();

// вывод дня недели, даты и месяца
function showDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const currentDate = date.toLocaleDateString("en-US", options);
  day.textContent = currentDate;
}
