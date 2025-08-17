const apiKey = "05b84ac90e66b8e257026ae01da6f286";  

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
            console.log(data);

            
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
    getWeather(city.value);
});


getWeather("Delhi");
