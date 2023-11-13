// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=OYqBSK4vpUhaipVjzAfR4CDSSckHz5Y2

fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=OYqBSK4vpUhaipVjzAfR4CDSSckHz5Y2")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        data.results.forEach(element => {
            const LI = document.createElement("li")
            const UL = document.querySelector(".world__list")
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
    