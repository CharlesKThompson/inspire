function QuoteController() {

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	qs.getQuote(drawQuote)

	function drawQuote(quote) {
		var template = ``
		template += `
		<div class="quote">
			<h2>${quote.quote}</h2>
		</div>`
		quoteElem.innerHTML = template
	}

}
