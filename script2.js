document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const posterContainer = document.getElementById('poster-container');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            movies.forEach(movie => {
                const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                const posterDiv = document.createElement('div');
                posterDiv.className = 'poster';
                posterDiv.innerHTML = `<img src="${posterUrl}" alt="${movie.title}">`;
                posterContainer.appendChild(posterDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
        });
});
