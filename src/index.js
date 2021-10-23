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

//Приветствие

function showGreeting() {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) {
    greeting.textContent = "Good morning";
  } else if (hours >= 6 && hours < 12) {
    greeting.textContent = "Good afternoon";
  } else if (hours >= 12 && hours < 18) {
    greeting.textContent = "Good afternoon";
  } else if (hours >= 18 && hours < 24) {
    greeting.textContent = "Good evening";
  } else if (hours >= 0 && hours < 6) {
    greeting.textContent = "Good night";
  }
}
//имя пользователя
function setLocalStorage() {
  localStorage.setItem("name", myname.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    myname.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);
