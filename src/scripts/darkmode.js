export default
    (function () {
        if (!window.location.pathname.includes("settings.html")) return

        const CTA_BUTTON = document.querySelector(".activate_darkmode--btn")

        CTA_BUTTON.addEventListener("click", clickHandler)

        function clickHandler() {
            const CLASS_LIST = document.body.classList
            CLASS_LIST.toggle("darkmode")
            localStorage.setItem("theme",
                CLASS_LIST.contains("darkmode")
                    ? "darkmode"
                    : "")
        }

        if (!localStorage.getItem("theme")) {
            localStorage.setItem("theme", "")
        }

        document.body.classList.add(localStorage.getItem("theme"))
    })()