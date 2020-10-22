let now = new Date();
console.log(now);

let hour = now.getHours();
let minutes = now.getMinutes();

let actualDate = now.getDate();
console.log(actualDate);

let months = [
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "October",
  "November",
];
let month = months[now.getMonth()];
let year = now.getFullYear();

let actualHour = `${hour}:${minutes}`;
console.log(actualHour);
let date = `${month} ${actualDate} ${year}`;
console.log(date);

let section = document.querySelector("section.hour");

section.innerHTML = `${actualHour}`;

let sectiontwo = document.querySelector("p.date");

sectiontwo.innerHTML = `${date}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${searchInput.value}`;
  searchCity(searchInput.value);
}

let form = document.querySelector("form");

form.addEventListener("submit", search);

function showCityWeather(response) { 
console.log(response.data.main.temp);
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}ºC`;

let description = document.querySelector("#description");
description.innerHTML = response.data.weather[0].description;
console.log(response.data.weather[0].description);

let humidity = document.querySelector("#humidity");
humidity.innerHTML = `Humidity:${response.data.main.humidity} Wind:${Math.round(response.data.wind.speed)}`;
}

function searchCity(city) {
let apiKey = "9e481bf3b092f68e836614e0d2bc8360";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(url).then(showCityWeather);
}

function showPosition(position) {
let apiKey = "9e481bf3b092f68e836614e0d2bc8360";
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
axios.get(url).then(showCityWeather);  
let h3 = document.querySelector("h3");
h3.innerHTML = "Mexico City";
}
     
function getCurrentPosition(){
navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#current");
button.addEventListener("click", getCurrentPosition);





