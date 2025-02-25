let addMovie=document.querySelector("#addMovie");
let display=document.querySelector("#display");

let allMovies=[];

addMovie.addEventListener("click",()=>{
    let newMovie=prompt("Enter the name of the movie");
    allMovies.push(newMovie);
    displayMovies();
})

console.log(allMovies);


function displayMovies(){
    display.textContent="";
    allMovies.forEach((movie)=>{
        let movieItem=document.createElement("div");
        movieItem.textContent=`${movie}`;
        movieItem.style.padding="10px";
        movieItem.style.margin="5px";
        display.appendChild(movieItem);
    });
}
