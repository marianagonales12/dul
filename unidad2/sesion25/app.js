const parrafo = document.getElementById("demo");

let text = "";
//for (let i = 0; i < 10; i++) {
// text += i + "<br>";
//}

//parrafo.innerHTML = text;


const animes = ["snk", "Naruto", "Saint Seiya", "Los 7 pecados capitales", "Tokyo Ghoul", "Pokemon"];
for (let i = 0; i < animes.length; i++) {
    text += animes[i] + "<br>" + `<img src="js/img/imagen${i}.jpg" alt="">` + "<br>";
}

parrafo.innerHTML = text;
