const apiKey ="e99a306965fe3d4b978e2a72ca867a61";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox = document.getElementById('myinput')

const searchbtn = document.getElementById('searchbutton')

const weatherIcon = document.querySelector('.rain_img');

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

  if (response.status === 404) {
        alert("City not found!");
        return; 
    }

    var data = await response.json();

    console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/1146/1146869.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/8030/8030068.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2864/2864403.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/5345/5345821.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2910/2910189.png";
  }
     

       
}

searchbtn.addEventListener('click' , ()=>{checkWeather(searchbox.value);})
searchbox.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkWeather(searchbox.value);
  }
});