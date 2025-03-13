document.addEventListener("DOMContentLoaded", () => {
    const movieInput = document.getElementById("movieInput");
    const addMovieButton = document.getElementById("addMovie");
    const clearListButton = document.getElementById("clearList");
    const movieList = document.getElementById("movieList");
    const movieCount = document.getElementById("movieCount");
    
    let movies = [];

    function updateDisplay() {
        movieList.innerHTML = "";
        movies.forEach((movie, index) => {
            let li = document.createElement("li");
            li.textContent = `${index + 1}. ${movie}`;
            li.addEventListener("click", () => removeMovie(index));
            movieList.appendChild(li);
        });
        movieCount.textContent = movies.length;
    }

    function addMovie() {
        let movieName = movieInput.value.trim();
        if (movieName === "") return;
        movies.push(movieName);
        movieInput.value = "";
        updateDisplay();
    }

    function removeMovie(index) {
        movies.splice(index, 1);
        updateDisplay();
    }

    function clearList() {
        movies = [];
        updateDisplay();
    }

    addMovieButton.addEventListener("click", addMovie);
    clearListButton.addEventListener("click", clearList);
});
