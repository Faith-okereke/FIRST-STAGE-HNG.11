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
    currentMinute = currentHour < 10 ? "0" + currentHour : currentHour;
    currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute;

    //Set Time to PM or AM
     currentMinute= currentHour > 12? currentMinute +"PM" :currentMinute +"AM"
    //set the current time and day
    newHour.innerHTML = "Time: " + currentHour + ":" + currentMinute;
    newDay.innerHTML = "Day: " + days[currentDay];
})
