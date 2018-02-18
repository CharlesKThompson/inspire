function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	var weatherElem = document.getElementById('weather')



	weatherService.getWeather(function (weather, ) {
		var temp = weather.main.temp
		var farenheidt = Math.trunc(((temp-273.15)*1.8)+32)
		
		template = ``
		template +=
			`<div class="weather">
		<h2>Todays Weather</h2>
		</h4><i class="fa fa-thermometer-quarter" aria-hidden="true"></i><b> Current Temperature: </b>${farenheidt + " degrees"}</h4>
		<h5><b>Wind Speed </b>${ weather.wind.speed + "mph"}</h5>
	</div>`
		weatherElem.innerHTML = template

	})

}