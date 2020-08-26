
$(document).ready(function(){
    
   $("#submitCity").click(function(){
       return getWeather();
   })
    
    $("#foreee").click(function(){
        return lalala();
    })
    
});

function getWeather(){
    var city = $("#city").val();
    
    if (city != ''){
        
        $.ajax({
           url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial&APPID=f0a64c5d06c0afc68ab07c00441cd53f",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showResults(data);
                
                $("#showw").html(widget);
                $("#city").val('');
            }
        });
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'>City field cannot be empty</div>");
    }
}

function showResults(data){
    return "<h3 style='font-weight:bold; color: black; font-size: 25px' >Current Weather for "+data.name+", "+data.sys.country+"</h3>" +
    "<p>Current Temperature: "+data.main.temp+" &deg;F</p>"+
        "<p>Weather: "+data.weather[0].main+" <img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png'></p>" +
        "<p>Feels Like: "+data.main.feels_like+"&deg;F</p>" +
        "<p>Minimum: "+data.main.temp_min+"&deg;F</p>" +
        "<p>Maximum: "+data.main.temp_max+"&deg;F</p>" +
        "<p>Wind Speed: "+data.wind.speed+" mph</p>";
        
}

function lalala(){
    var city =$("#cityForecast").val();
    
    if (city != ''){
        
        $.ajax({
           url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&cnt=16&units=imperial&APPID=f0a64c5d06c0afc68ab07c00441cd53f',
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                console.log(data)
                
                var table = '';
                
                for(var i=0; i < data.list.length; i++){
                    table += "<tr>";
                    
                    table += "<td><img src='http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+"@2x.png'></p>";
                    table += "<td>" +data.list[i].weather[0].main+ "</td>";
                    
                    table += "<td>" +data.list[i].main.temp_min + "&deg;F</td>";
                    table += "<td>" +data.list[i].main.temp_max + "&deg;F</td>";
                    table += "<td>" +data.list[i].wind.speed + " mph</td>"; 
                    table += "</tr>";
                }
                
                $("#forecastletsgo").html(table);
                $("#city").val('');
            }
            
        });
    }
}

