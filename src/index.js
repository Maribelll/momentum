// time js
const time = document.querySelector(".time");
const day = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const myname = document.querySelector(".myname");
const city = document.querySelector(".city");

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
  localStorage.setItem("data", city.value);
}

window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    myname.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("data")) {
    city.value = localStorage.getItem("data");
  }
}
window.addEventListener("load", getLocalStorage);
city.addEventListener("change", () => getWeather(city.value));

//weather

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const winddata = document.querySelector(".wind");
const humiditydata = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".weather-description");

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=efcf1779fda597768be6e593d5c5d43d&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  winddata.textContent = `Wind speed: ${data.wind.speed}m/s`;
  humiditydata.textContent = `Humidity: ${data.main.humidity}`;
}

getWeather();

// player

const playList = [
  {
    title: "Aqua Caelestis",
    src: "assets/sounds/Aqua Caelestis.mp3",
    duration: "00:58",
  },
  {
    title: "Ennio Morricone",
    src: "assets/sounds/Ennio Morricone.mp3",
    duration: "03:50",
  },
  {
    title: "River Flows In You",
    src: "assets/sounds/River Flows In You.mp3",
    duration: "00:58",
  },
  {
    title: "Summer Wind",
    src: "assets/sounds/Summer Wind.mp3",
    duration: "00:58",
  },
];

const playListItem = document.querySelector(".play-list");

for (let i = 0; i < playList.length; i++) {
  const li = document.createElement("li");
  playListItem.append(li);
  li.textContent = playList[i].title;
  li.classList.add("play-item");
}

const playBtn = document.querySelector(".play");
const playPrev = document.querySelector(".play-prev");
const playNext = document.querySelector(".play-next");
const items = document.querySelectorAll(".play-item");
let isPlay = false;
const audio = new Audio();
let playSong = 0;

function getSong() {
  const song = `${playList[playSong].src}`;
  audio.src = song;
  console.log(audio.src);
}
getSong();

const playPause = () => {
  if (isPlay) {
    pauseAudio();
  } else if (!isPlay) {
    playAudio();
  }
};

function playAudio() {
  isPlay = true;
  audio.play();
  playBtn.classList.add("pause");
}

function pauseAudio() {
  isPlay = false;
  audio.pause();
  playBtn.classList.remove("pause");
}

function playAudioPrev() {
  if (playSong === 0) {
    playSong = playList.length - 1;
  } else {
    playSong -= 1;
  }
  addClassToPlayListItem(playSong);
  getSong();
  playAudio();
}

function playAudioNext() {
  if (playSong === playList.length - 1) {
    playSong = 0;
  } else {
    playSong += 1;
  }
  addClassToPlayListItem(playSong);
  getSong();
  playAudio();
}

const addClassToPlayListItem = (item = 0) => {
  if (items.length === 0) {
  } else {
    for (let index = 0; index < items.length; index++) {
      items[index].classList.remove("item-active");
    }
  }
  items[item].classList.add("item-active");
};

addClassToPlayListItem(playSong);
playPrev.addEventListener("click", playAudioPrev);
playNext.addEventListener("click", playAudioNext);
playBtn.addEventListener("click", playPause);
