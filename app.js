const apiKey = 'b964283bf769dbcd435f3168d37a6623';

const searchWeather = () => {
    const city = document.getElementById('cityName').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(resp => resp.json())
        .then(data => displayWeather(data));
}

const setInnerText = (id, value) => {
    const field = document.getElementById(id);
    field.innerText = value;
}
const displayWeather = data => {
    console.log(data);
    setInnerText('displayCityName', data.name);
    setInnerText('displayTemp', data.main.temp);
    setInnerText('miniStatus', data.weather[0].main);
    const weatherIconID = data.weather[0].icon;
    const weatherIcon = document.getElementById('weatherIcon');
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weatherIconID}@2x.png`)
    const weatherDiv = document.getElementById('weather-display-section');
    weatherDiv.style.display = "block";
}