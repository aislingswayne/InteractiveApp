window.addEventListener("keypress", changeColor);
let body = document.body

function changeColor(event) {
    if (event.key === "l"){
        body.style.background = "lightblue";
    } else if (event.key === "g") {
        body.style.background = "green";
    } else if (event.key === "y") {
        body.style.background = "yellow";
    }  else if (event.key === "r") {
        body.style.background = "red";
} else {
    body.style.background = "lightpink";
}
}
let hat= document.getElementById("hat");

hat.addEventListener("mousemove", (event) => {changeHat(event)});

let hat2= document.getElementById("hat2");

hat2.addEventListener("mousemove", (event) => {changeHat(event)});

function changeHat(event) {
 hat.style.fill="blue";
 hat2.style.fill="blue"
}

