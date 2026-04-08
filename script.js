function getWeather() {
    let a = document.getElementById("location").value;

    fetch(`http://api.weatherapi.com/v1/current.json?key=e8a7d72f4fb347a0812175438260804&q=${a}&aqi=yes`)
    .then(b => b.json())
    .then(c => {
        document.getElementById("result").innerHTML =
            "Location: " + c.location.name + "<br>" +
            "Temperature: " + c.current.temp_c + " °C";
    })
    .catch(() => {
        document.getElementById("result").innerHTML = "Error fetching data";
    });
}