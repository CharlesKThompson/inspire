function ImageController() {
	var imageService = new ImageService()

	console.log("tester")

	function getImage() {
		imageService.getImage(drawImage)
	}

	function drawImage(imgUrl) {
		document.body.style.background = `url('${imgUrl.large_url}')`
	}

	getImage()

}