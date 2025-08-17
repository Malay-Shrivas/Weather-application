
const apiKey = "8faf93f54477e3a07923b2a54beb8437";  

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const humidity2 = document.getElementById("humidity2");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_speed2 = document.getElementById("wind_speed2");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");


const getWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found or API error");
            }
            return response.json();
        })
        .then((data) => {
            console.log("API Response:", data);

           
            cityName.innerHTML = data.name;
            temp.innerHTML = data.main.temp;
            temp2.innerHTML = data.main.temp;
            feels_like.innerHTML = data.main.feels_like;
            humidity.innerHTML = data.main.humidity;
            humidity2.innerHTML = data.main.humidity;
            min_temp.innerHTML = data.main.temp_min;
            max_temp.innerHTML = data.main.temp_max;
            wind_speed.innerHTML = data.wind.speed;
            wind_speed2.innerHTML = data.wind.speed;
            wind_degrees.innerHTML = data.wind.deg;
            sunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        })
        .catch(err => {
            console.error(err);
            alert(err.message);
        });
};


const city = document.getElementById("city");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!city.value) {
        alert("Please enter a city name");
        return;
    }
    getWeather(city.value);
});


getWeather("Delhi");
