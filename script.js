var apiKey = '95fd6dc7de26cd008d30dc727c2e7c12'

var searchButton = $('#search-button');
var forecastContainer = $('#five-day-forecast')
var oneDayContainer = $('.one-day-forecast')



function getTodaysWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=40.5&lon=74.4&exclude=hourly,minutely&units=metric&appid=' + apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        
            oneDayContainer.append(`<div class="card" style="width: 18rem;">
            <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${city}</h5>
              <p class="card-text">Temp: ${data.current.temp}</p>
              <p class="card-text">Humidity: ${data.current.humidity}</p>
              <p class="card-text">Wind Speed: ${data.current.wind_speed}</p>
              <p class="card-text">Uvi Index: ${data.current.uvi}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`)

            for (let i = 0; i < 5; i++) {
                var day = data.daily[i]

                forecastContainer.append(`<div class="card" style="width: 18rem;">
            <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${city}</h5>
              <p class="card-text">High Temp: ${day.temp.max}</p>
              <p class="card-text">Humidity:Low Temp ${day.temp.min}</p>
              <p class="card-text">Wind Speed: ${data.current.wind_speed}</p>
              <p class="card-text">Uvi Index: ${data.current.uvi}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`)
            }
        })
}
getTodaysWeather('new york');