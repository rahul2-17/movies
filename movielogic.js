let addMovie = document.querySelector("#addMovie");
let display = document.querySelector("#display");

// Load movies from localStorage if available
let allMovies = JSON.parse(localStorage.getItem("movies")) || [];

function displayMovies() {
    display.innerHTML = ""; // Clear previous list

    allMovies.forEach((movie, index) => {
        let movieItem = document.createElement("div");
        movieItem.textContent = `${index + 1}. ${movie}`;
        movieItem.style.padding = "10px";
        movieItem.style.margin = "5px";
        display.appendChild(movieItem);
    });
}

// Show existing movies on page load
displayMovies();

addMovie.addEventListener("click", () => {
    let newMovie = prompt("Enter the name of the movie");
    if (newMovie) {
        allMovies.push(newMovie);
        localStorage.setItem("movies", JSON.stringify(allMovies)); // Save to localStorage
        displayMovies();
    }
});
