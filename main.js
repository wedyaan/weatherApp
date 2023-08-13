let apiKey = "542448039aa4e32ee6955524e7aa262b";

let inputSearch = document.getElementById("inputSearch");
let btnSearch = document.getElementById("btnSearch");
let weatherImage = document.querySelector(".weatherIcon");

async function weatherInCity(city) {
  let response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
      city +
      `&appid=${apiKey}`
  );
  let data = await response.json();

  document.getElementById("city").innerHTML = data.name;
  document.getElementById("temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.getElementById("humid").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + "Km/H";

  if (data.weather[0].main == "Clouds") {
    weatherImage.src = "/Cloud.png.crdownload";
  } else if (data.weather[0].main == "Clear") {
    weatherImage.src = "/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImage.src = "/rain-clipart-transparent-background-3.png.crdownload";
  }

  document.querySelector(".weather").style.display = "block";
}
btnSearch.addEventListener("click", () => {
  weatherInCity(inputSearch.value);
});
