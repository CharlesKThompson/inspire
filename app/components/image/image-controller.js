function ImageController() {
	var imageService= new ImageService()

	var bodyElem = document.getElementById('body')
	
	
	this.getImage = function getImage(){
		imageService.getImage()
	}
	
	this.getWeather = function getWeather(){
		imageService.Weather()
	}
	
	bodyElem.innerHTML=getImage(), getWeather()
}