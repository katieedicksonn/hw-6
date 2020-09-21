// api key : 888ff5fa8ac057fe17e50e41906e92ec
// URL:https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
// exclude=hourly,daily&appid={YOUR API KEY}

// need to make a prompt where user can type in the city name called cityName
var list = $("#list");
var card = $("#todayCard")
var searchCity = $("#searchCity");
var recentSearch = []
var storedSearch = JSON.parse(localStorage.getItem(recentSearch));
 function saveBtn() {
  

 // Storing the rating data
var lastSearch = response.Rated;

          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          movieDiv.append(pOne);

 }
//  when save button is clicked response is added to the list below and 











function displayWeatherInfo(){
var cityName = $(this).attr("")
var forecastURL = "pro.openweathermap.org/data/2.5/forecast/hourly?q=" + cityName + "&appid=888ff5fa8ac057fe17e50e41906e92ec"

$.ajax( {
    url: forecastURL,
    method: "GET"
    }).then(function(response){
        console.log(response);
        var name = $("<h2>").html(cityName);
        card.append(name);

        
        
        

    })


}