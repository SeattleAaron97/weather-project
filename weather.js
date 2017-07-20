
function action(){
    zip = document.getElementById("zipCode").value;
    


    apiTranslator(zip);
}

// !!! WEATHERMAP.ORG API KEY !!! --->     fee07ba88ad9a84b43079c48a01b2564   !!! //

function apiTranslator(zipInt){
    console.log("zip code = " + zip);
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip='
             + zipInt + '&APPID=fee07ba88ad9a84b43079c48a01b2564', true);


    request.onload = function(){
        if(request.status >= 200 && request.status <=400)   {

            var rawData = request.responseText;
            var JSONdata = JSON.parse(rawData);
            var currentTempInKelvin = JSONdata.main.temp;
            var currentTempInFahrenheit = (currentTempInKelvin * 9 / 5) - 459.67;
            var currentWeatherDescription = JSONdata.weather[0].description;
            var currentWeatherIcon = JSONdata.weather[0].icon;
            var iconImage = currentWeatherIcon + ".png";

            document.getElementById("tempOutputter").innerHTML = "current temperature in fahrenheit  =  " + currentTempInFahrenheit;
             
            document.getElementById("weatherOutputter").innerHTML = "current weather type = " + currentWeatherDescription + "!!!" + iconImage;
            
            
        }
        else{
            console.log("oops");
        }
        
    }


    request.send();



}
