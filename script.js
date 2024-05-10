let countDownDate = new Date("February 20, 2025 00:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

}, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}