	function searchMovies() {
	const searchQuery = document.getElementById("searchInput").value;
	const apiKey = "YOUR_API_KEY_HERE";
	const apiUrl = `https://imdb-api.com/en/API/SearchMovie/${apiKey}/${searchQuery}`;

	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			const movieContainer = document.getElementById("movieContainer");
			movieContainer.innerHTML = "";

			data.results.forEach(movie => {
				const movieCard = `
					<div class="movieCard">
						<img src="${movie.image}">
						<h2>${movie.title}</h2>
						<p>${movie.description}</p>
						<a href="${movie.url}" target="_blank">More Info</a>
						<a href="${movie.your_download_link}" target="_blank">Download</a>
					</div>
				`;

				movieContainer.insertAdjacentHTML("beforeend", movieCard);
			});
		});
}

searchMovies();