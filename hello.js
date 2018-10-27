
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
        var city = document.getElementById("txt");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                        
                               var weather =  this.responseText;
                }
        };
        xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=e7a8bdd334c740cd19bde3747e110a49", true);
        xhttp.send();
}



