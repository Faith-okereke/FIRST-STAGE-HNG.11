document.addEventListener("DOMContentLoaded", function () {
    let currentHour = new Date().getUTCHours();
    let currentMinute = new Date().getUTCMinutes();
    const currentDay = new Date().getDay();
    const newHour = document.querySelector("p[data-testid='currentTimeUTC']");

    let d = new Date();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const newDay = document.querySelector("p[data-testid='currentDay']");

    //Format Hours and Minutes to always have two digits
    currentHour = currentHour < 10 ? "0" + currentHour : currentHour;
    currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute;

    //set the current time and day
    newHour.innerHTML = "Time: " + currentHour + ":" + currentMinute;
    newDay.innerHTML = "Day: " + days[d.getDay()];

    //function to close the modal
    window.CloseModal = function () {
        let openModal = document.getElementById("modal")
        openModal.style.display = "none"
        //    openModal?document.body.style.display="block" : document.body.style.display="none"
        let mainPage = document.getElementById("mainPage")
        mainPage.style.opacity = 1
    }
})
