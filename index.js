
// Select some elements...
let header = document.querySelector("#page-header")
header.style.textAlign = "left"

let dogImages = document.querySelectorAll(".dog-image")
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = "50px"
}

let dogNames = document.querySelectorAll(".dog-name")
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = "left"
    dogNames[i].style.backgroundColor = "#03fcad"
    dogNames[i].style.borderRadius = "50px"
}

let footer = document.querySelector(".footer")
footer.style.color = "gray"

let backColor = document.querySelectorAll("p")
for(let i = 0; i < backColor.length; i++){
    backColor[i].style.backgroundColor = "#03fcad"
    backColor[i].style.opacity = ".65"
}


//console.log(dogImages)