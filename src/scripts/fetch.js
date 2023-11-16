// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=OYqBSK4vpUhaipVjzAfR4CDSSckHz5Y2
import getArticlesByCategory from "./getArticlesByCategory" //henter funktionen som gjør at kategoriene skifter

export default (function() {
    if (!window.location.href.includes("index.html")) return


const worldDropDown = document.querySelector(".headline__world--button")
const worldList = document.querySelector(".headline__world--list")
let worldHasBeenClicked = false

worldDropDown.addEventListener("click", () => {
        if (!worldHasBeenClicked) {
        worldHasBeenClicked = true

    }
    if (worldList.style.display === "none") {
        worldList.style.display = "block"
    } else {
        worldList.style.display = "none"
    }  
        getArticlesByCategory("world")
})

const travelDropDown = document.querySelector(".headline__travel--button")
const travelList = document.querySelector(".headline__travel--list")
let travelHasBeenClicked = false

travelDropDown.addEventListener("click", () => {
        if (!travelHasBeenClicked) {
        travelHasBeenClicked = true

    }
    if (travelList.style.display === "none") {
        travelList.style.display = "block"
    } else {
        travelList.style.display = "none"
    }  
        getArticlesByCategory("travel")
})

const artsDropDown = document.querySelector(".headline__arts--button")
const artsList = document.querySelector(".headline__arts--list")
let artsHasBeenClicked = false

artsDropDown.addEventListener("click", () => {
        if (!artsHasBeenClicked) {
        artsHasBeenClicked = true

    }
    if (artsList.style.display === "none") {
        artsList.style.display = "block"
    } else {
        artsList.style.display = "none"
    }  
        getArticlesByCategory("arts") 
})

const foodDropDown = document.querySelector(".headline__food--button")
const foodList = document.querySelector(".headline__food--list")
let foodHasBeenClicked = false

foodDropDown.addEventListener("click", () => {
        if (!foodHasBeenClicked) {
        foodHasBeenClicked = true

    }
    if (foodList.style.display === "none") {
        foodList.style.display = "block"
    } else {
        foodList.style.display = "none"
    }  
        getArticlesByCategory("food")
})

const fashionDropDown = document.querySelector(".headline__fashion--button")
const fashionList = document.querySelector(".headline__fashion--list")
let fashionHasBeenClicked = false

fashionDropDown.addEventListener("click", () => {
        if (!fashionHasBeenClicked) {
        fashionHasBeenClicked = true

    }
    if (fashionList.style.display === "none") {
        fashionList.style.display = "block"
    } else {
        fashionList.style.display = "none"
    }  
        getArticlesByCategory("fashion")
})

const theaterDropDown = document.querySelector(".headline__theater--button")
const theaterList = document.querySelector(".headline__theater--list")
let theaterHasBeenClicked = false

theaterDropDown.addEventListener("click", () => {
        if (!theaterHasBeenClicked) {
            theaterHasBeenClicked = true

    }
    if (theaterList.style.display === "none") {
        theaterList.style.display = "block"
    } else {
        theaterList.style.display = "none"
    }  
        getArticlesByCategory("theater")
})
})()