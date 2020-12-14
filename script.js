//display time
function showTime(){
     date = new Date();
     hours = date.getHours(); 
     minutes = date.getMinutes(); 
     seconds = date.getSeconds(); 
     morningOrNight = "AM";
    
    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        morningOrNight = "PM";
    }

    
    time = hours + ":" + minutes + ":" + seconds + " " + morningOrNight;
    document.getElementById("displayTime").innerHTML = time;
    document.getElementById("displayTime").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

//greeting based on time of day

    myDate = new Date();
    hours = myDate.getHours();
    let greetings;

    if (hours < 12)
        greetings = 'Good Morning!';
    else if (hours >= 12 && hours <= 17)
        greetings = 'Good Afternoon!';
    else if (hours >= 17 && hours <= 24)
        greetings = 'Good Evening!';

    document.getElementById('timedGreeting').innerHTML = greetings

//display apod

let $image = document.getElementById('image')
fetch('https://api.nasa.gov/planetary/apod?api_key=6JsZoGYFA8sx3F0Mf9fQE4mGkKUm0zH9iwMsdFaU&')
.then(response =>{
            return response.json()
        })
        .then(data => {
            $image.src = data.url
        })
        .catch(error =>{
            console.log(error.name, error.message)
        })

//more button, double click
function displayMoreInfo(){
    more = document.getElementById("hiddensection")
    if (more.style.display === "none") {
        more.style.display = "block";
    } else {
        more.style.display ="none"
    }

//get date
today = new Date()
date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

document.getElementById("displayDate").innerHTML = date
    }


//get day name

weekDays=
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

today=new Date()
thisDay=today.getDay()

thisDay=weekDays[thisDay]

document.getElementById("weekDay").innerHTML = "Happy " + thisDay + "!"


//change colour

color = [ "#FF0000" , "#FF7F00" , "FFFF00", " #0000FF", "#2E2B5F", "#8B00FF", "#50768a"]
i = 0
document.querySelector("#colorswap").addEventListener("click", 
function (){
    i = i < color.length ? ++i : 0
    document.querySelector(".application").style.background = color[i]
})


// change font color

fontColor = ["#ff6698" , "#ffb366" , "#ffff66", "#98ff66", "#6698ff", "#000000"]
l = 0
document.querySelector("#fontswap").addEventListener("click", 
function (){
    l = l < fontColor.length ? ++l : 0
    document.querySelector("p#timedGreeting").style.color = fontColor[l]
    document.querySelector("h1.time").style.color = fontColor[l]
    document.querySelector("h1.apod").style.color = fontColor[l]
    document.querySelector("h1.date").style.color = fontColor[l]
})


// display settings, double click

function displaySettings(){
    more = document.getElementById("hiddensettings")
    if (more.style.display === "none") {
        more.style.display = "block";
    } else {
        more.style.display ="none"
    }
}

//save colour and font colour to local storage


// localStorage.setItem('chosenFontColor', 'fontColor')
// localStorage.setItem('bgColor', 'color')

// localStorage.getItem('bgColor')
// localStorage.getItem('fontColor')

// const fontColor = JSON.parse(localStorage.getItem('fontColor'))
// const color = JSON.parse(localStorage.getItem('bgColor'))