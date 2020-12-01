//Create button
const dynamicButton = document.createElement("button");
const dynamicText = document.createTextNode("Click this!")
dynamicButton.setAttribute("id", "button")
dynamicButton.appendChild(dynamicText);
document.body.appendChild(dynamicButton);

//Create div
const dynamicDiv = document.createElement("div");
document.body.appendChild(dynamicDiv);


//fetch movie data from IMDB API
dynamicButton.addEventListener("click", function () {
    fetch(`https://www.omdbapi.com/?apikey=c5756d69&s=click`)
        .then((response) => response.json())
        .then((data) => {           
            
            const movies = data.Search[0].Poster;
            console.log(movies);
            const dynamicImage = document.createElement("img");
            dynamicImage.setAttribute("src", movies);
            document.body.appendChild(dynamicImage);
            dynamicImage.addEventListener("click", function(){
            
            const dynamicHeadingText = document.createTextNode("Ava, I love you.");
            const dynamicH1 = document.createElement("h1");
            dynamicH1.appendChild(dynamicHeadingText);
            
            document.body.prepend(dynamicH1);
            
            })

        })
});
