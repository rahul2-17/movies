let addMovie=document.querySelector("#addMovie");

let allMovies=[];

addMovie.addEventListener("click",()=>{
    let newMovie=prompt("Enter the name of the movie");
    allMovies.push(newMovie);
})

console.log(allMovies);