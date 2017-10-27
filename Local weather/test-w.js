$(function(){
  
    var api="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c3a54977f0f3d2c9556b4d1e1bdee268"; 
    var apiKey = 'c3a54977f0f3d2c9556b4d1e1bdee268';
  //var lat;
  //var long;
  var C =false; 
  var apiData;
  var data;
  var id;

  
  
  function displayTemp(fTemp, c){
    if (c) return Math.round((fTemp-32)*(5/9)) + '&deg; c';
    return Math.round(fTemp) + '&deg; F';
  }
  
function response(data, C){
             var currentLocation=data.name;
              var currentConditions=data.weather[0].description;
              var currentTemp= displayTemp (data.main.temp,C);
              var icon=  data.weather[0].icon;
              var apiData=data;
                              
              $('#currentTemp').html(currentTemp);
              $('#currentConditions').html(currentConditions);
                 
              var iconSrc= "https://openweathermap.org/img/w/" + icon + ".png"; 
                
              $('#currentTemp').prepend('<img src=' + iconSrc + '>');
}

$('#submit weather').click(function(){
  var city = $('#city').val();
  if(city != ''){
  $.ajax({
    url: 'https//api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + '&type=accurate' + callback + "&APPID=c3a54977f0f3d2c9556b4d1e1bdee268",
        type: 'GET',
        datatype: 'jsonp',
        success: function(data){
          var widget = show(data);
          $("#resonse").html(widget);
         $('#city').val('');
        }
  }); 
  } 
  });

  
  
 backgroundImg = [
        'https://c2.staticflickr.com/4/3046/2804916709_6e37da6cc4_b.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/8d/Here_comes_rain_again.jpg',
        'https://static.pexels.com/photos/81769/rain-green-trees-water-81769.jpeg',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Snow-Nature-Winter-Landscape-Cold-Sunny-Day-1891364.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/30/A_foggy_day_in_Pathriata.JPG',
        'https://static.pexels.com/photos/440731/pexels-photo-440731.jpeg',
        'https://upload.wikimedia.org/wikipedia/commons/6/6b/Cloudy_Day_01.jpg',
        'https://images.pexels.com/photos/89010/pexels-photo-89010.png?w=940&h=650&auto=compress&cs=tinysrgb'
 
   ];
  
  
  
 $.getJSON('https://freegeoip.net/json/') 
     .done (function(location)
     {
         $('#country').html(location.country_name);
          $('#city').html(location.city);
          $('#latitude').html(location.latitude);
          $('#longitude').html(location.longitude);
          $('#ip').html(location.ip);
          
          
   
        
   
              $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+location.latitude+'&lon='+location.longitude+'&units=imperial&appid=c3a54977f0f3d2c9556b4d1e1bdee268', function(data){//--->USE HTTPS^

                //console.log(data);//Success!!!

                apiData=data;
                
                response (apiData,C);
                
                $('#toggle').click(function(){
                    C = !C;
                    response(data,C);          
                });
               
                var id = data.weather[0].id,
                bgIndex,
                backgroundId = [299, 399, 599, 699, 799, 800, 899, 905];



            backgroundId.push(id);
            bgIndex = backgroundId.sort().indexOf(id);

            $('body').css('background-image', 'url(' + backgroundImg[bgIndex] + ')'); 
                
               });
   
   
   

   
     });
  
          
  
});

