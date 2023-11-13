// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=OYqBSK4vpUhaipVjzAfR4CDSSckHz5Y2

const dropDown = document.querySelector(".category__list")
const list = document.querySelector(".list__items")

dropDown.addEventListener("click", () => {
    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    }
    fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=OYqBSK4vpUhaipVjzAfR4CDSSckHz5Y2")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            data.results.forEach(element => {
                const LI = document.createElement("li")
                const UL = document.querySelector(".list__items")
                LI.innerHTML = `
            <h2>
                ${element.title}
            </h2>
            <p>
            ${element.abstract}
            </p>
            `
                UL.append(LI)
            })
        })

})

dropDown.addEventListener("click", () => {
    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    }
    fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=OYqBSK4vpUhaipVjzAfR4CDSSckHz5Y2")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            data.results.forEach(element => {
                const LI = document.createElement("li")
                const UL = document.querySelector(".list__items")
                LI.innerHTML = `
            <h2>
                ${element.title}
            </h2>
            <p>
            ${element.abstract}
            </p>
            `
                UL.append(LI)
            })
        })

})

dropDown.addEventListener("click", () => {
    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    }
    fetch("https://api.nytimes.com/svc/topstories/v2/sport.json?api-key=OYqBSK4vpUhaipVjzAfR4CDSSckHz5Y2")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            data.results.forEach(element => {
                const LI = document.createElement("li")
                const UL = document.querySelector(".list__items")
                LI.innerHTML = `
            <h2>
                ${element.title}
            </h2>
            <p>
            ${element.abstract}
            </p>
            `
                UL.append(LI)
            })
        })

})