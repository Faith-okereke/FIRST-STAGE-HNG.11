document.addEventListener("DOMContentLoaded", function () {
    let currentHour = new Date().getUTCHours();
    let currentMinute = new Date().getUTCMinutes();
    console.log(currentMinute)
    const currentDay = new Date().getDay();
    const newHour = document.querySelector("p[data-testid='currentTimeUTC']");
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

    //Set Time to PM or AM
    currentMinute = currentHour > 12 ? currentMinute + "PM" : currentMinute + "AM"
    //set the current time and day
    newHour.innerHTML = "Time: " + currentHour + ":" + currentMinute;
    newDay.innerHTML = "Day: " + days[currentDay];
})
