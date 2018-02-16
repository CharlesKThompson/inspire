function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	function Weather(apiUrl) {
		this.weather = apiUrl.main.temp
	}
	this.getImage = function (callWhenDone) {
		return $.get(apiUrl, function (res) {
			res = JSON.parse(res)
			console.log('Image Data:', res)
			callWhenDone(res)
		})
	}
	getImage(callWhenDone)
}
