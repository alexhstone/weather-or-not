
//giving ourselves access to a couple HTML elements to put our weather and our... not
const weather = document.querySelector("#weather");
const not = document.querySelector('#not'); 

//TODO:  Create a function that takes in zipcode and converts it to lat and long... 


//call our API to get the current weather (just in Minneapolis, right now)
async function getWeather() {
    let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=44.98&longitude=-93.26&current_weather=true&temperature_unit=fahrenheit')
    let data = await response.json()
    return data;
}

//when we get the data, we run our function that... 
getWeather().then(data => updateWeather(data));


//updates the values on the page with the weather... and a random "not" value.
function updateWeather(data) {

    let rand = Math.floor(Math.random() * 98 + 1)

    weather.innerHTML = `${data.current_weather.temperature} F \u00B0`
    not.innerHTML = `${rand} F \u00B0`

}