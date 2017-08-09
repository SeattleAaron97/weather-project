function action(){
    zip = document.getElementById("zipCode").value;
    apiTranslator(zip);
}

function myKeyUp(e) {
    console.log(e.keyCode);
    if(e.keyCode == 13){
        action();
    }
}

// !!! WEATHERMAP.ORG API KEY !!! --->     fee07ba88ad9a84b43079c48a01b2564   !!! //

function apiTranslator(zipInt){
    console.log("zip code = " + zip);
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.apixu.com/v1/current.json?key=1623b795a6ef4d499c852228172807&q='
             + zipInt, true);


    request.onload = function(){
        if(request.status >= 200 && request.status <=400)   {

            var rawData = request.responseText;
            
            var JSONdata = JSON.parse(rawData);
            console.log(JSONdata);
            //debugger;
            var currentTemp = JSONdata.current.temp_f;
            console.log(currentTemp);
           
            var currentWindDir = JSONdata.current.wind_dir;
            //var currentWeatherIcon = JSONdata.weather[0].icon;
            //var iconImage = currentWeatherIcon + ".png";

            document.getElementById("tempOutputter").innerHTML = "current temperature in fahrenheit  =  " + currentTemp;
             
            document.getElementById("weatherOutputter").innerHTML = "current wind direction = " + currentWindDir + "!!!";// + iconImage;
            
            
        }
        else{
            console.log("oops");
        }
        
    }


    request.send();



}
