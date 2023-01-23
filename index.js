
//giving ourselves access to a couple HTML elements to put our weather and our... not
const weather = document.querySelector("#weather");
const not = document.querySelector('#not'); 
const cities = document.querySelector("#cities");


//set up an event listener on our cities selector... 

cities.addEventListener("change", chooseCity)


//updates the values on the page with the weather... and a random "not" value.
function updateWeather(data) {
    //create a random value for our "not"
    let rand = Math.floor(Math.random() * 98 + 1)

    weather.innerHTML = `${data.current_weather.temperature} F \u00B0`
    not.innerHTML = `${rand} F \u00B0`

}



//this is our funciton that lets the user choose a city... 
//TO-DO:  Write this... better.. 
function chooseCity(){
    if (cities.value == "minneapolis"){
        let lat = "44.98"
        let long = "-93.26"
        getWeather(lat, long).then(data => updateWeather(data));   
    }
    else if (cities.value == "chicago"){
        let lat = "41.87"
        let long = "-87.62"
        getWeather(lat, long).then(data => updateWeather(data));
    }
    else if (cities.value == "manhattan"){
        let lat = "40.78"
        let long = "-73.97"
        getWeather(lat, long).then(data => updateWeather(data));
    }
    else if (cities.value == "denver"){
        let lat = "39.73"
        let long ="-104.99"
        getWeather(lat, long).then(data => updateWeather(data));
    }
    else if (cities.value == "la"){
        let lat = "34.05"
        let long = "-118.24"
        getWeather(lat, long).then(data => updateWeather(data));
    }
    else if (cities.value == "portland"){
        let lat = "45.51"
        let long ="122.67"
        getWeather(lat, long).then(data => updateWeather(data)); 
    }
    else {
        cities.value = "none"
        return
    }
    changeBackground(cities.value);
}

//call our API to get the current weather
async function getWeather(lat, long) {
    let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&temperature_unit=fahrenheit`)
    let data = await response.json()
    return data;
}


//little helper function for changing the background
function changeBackground(city){
    document.body.style.backgroundImage = `url(./backgrounds/${city}.jpg)`
}