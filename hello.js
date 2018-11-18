
// var a = [4, 5, 7, 8]; //for defining an array , we use square brackets 
// a[3];//for accessing the elements of the array we need some sort of index and we use the name of the array then [] with the index
// var car = { "integer": 1, "float": 4.5, "string": "Hello", "array": a, 6: 8 };
// console.log(car.integer);
// console.log(car[6]);
// var paragraph = document.getElementById("paragraph");
// console.log(paragraph.innerText);
// paragraph.innerText = "hiiiii";

//         //document.

//         //this is a single line comment
//         /*
//         this is a multiple line comment
//         another line

//         */

//consuming a web API
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e7a8bdd334c740cd19bde3747e110a49

// function sayHello() {
//         alert("Hello there!");
// }

// function sayHelloThenMath() {
//         alert("Hello" + 10+12);
// }

// function sayMessage(message){


//         alert(message)
// }

// sayHello();


function loadDoc() {
        var city = document.getElementById("txt").value;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                        var weather = JSON.parse(this.responseText);
                        console.log(x = weather)
                        var tempInC = (weather.main.temp - 273.15);
                        document.getElementById("cityName").innerText = weather.name;
                        document.getElementById("countryCode").innerText = weather.sys.country;
                        document.getElementById("coordinates").innerText = "longitude: " + weather.coord.lon + " latitude: " + weather.coord.lat;
                        document.getElementById("weatherStatus").innerText = weather.weather[0].main;
                        document.getElementById("Wind").innerText = " wind speed: " + weather.wind.speed + " degree of the wind: " + weather.wind.deg;
                        document.getElementById("Clouds").innerText = weather.clouds.all
                        document.getElementById("countryCode").innerText = weather.sys.country;
                        document.getElementById("TemperatureinCelsius").innerText = tempInC;
                        document.getElementById("TemperatureinFahrenheit").innerText = (weather.main.temp * 9 / 5 - 459.67);
                        
                        document.getElementById("message").innerText = tempInC >= 10? "happy warm weather":"sad cold weather";

                        // if (tempInC >= 10) {
                        //         document.getElementById("message").innerText = "happy warm weather";
                        // } else {document.getElementById("message").innerText = "sad cold weather" ;}


                        //document.getElementById("message").inerText = 






                }
        };
        xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=e7a8bdd334c740cd19bde3747e110a49", true);
        xhttp.send();
}



