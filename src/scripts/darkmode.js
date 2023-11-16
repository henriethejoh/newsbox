export default//guard caulse
 (function(){
    if (!window.location.pathname.includes("settings.html"))return

    const CTA_BUTTON = document.querySelector(".activate_darkmode--btn")
    
    CTA_BUTTON.addEventListener("click", clickHandler)

    function clickHandler(){
        document.body.classList.toggle("darkmode")
    }
})()
