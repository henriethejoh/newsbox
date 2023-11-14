export default async function getArticlesByCategory(category) {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=OYqBSK4vpUhaipVjzAfR4CDSSckHz5Y2`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            data.results.forEach(element => {
                if (element.item_type !== "Article") return;
                const LI = document.createElement("li")
                LI.classList.add("headline__item")
                const UL = document.querySelector(`.headline__${category}--list`)
                LI.innerHTML = `
    <img class="headline__item--img" src = "${element.multimedia[0].url}">
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
}