


let nameElement = document.getElementById("city");
let weatherElement = document.getElementById("weather");
let tempElement = document.getElementById("temp");


function setFields(data){
    if(data.code==200){
        nameElement.innerHTML =  data.data.name;
        weatherElement.innerHTML = data.data.weather[0].main;
        tempElement.innerHTML = data.data.main.temp+"°C";
    }else{
        nameElement.innerHTML = "Error :"+data.message;
        weatherElement.innerHTML="";
        tempElement.innerHTML = "";
    }
}

function getUrl(city){
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c56749d27a583a61b2fddf948a0d03ce&units=metric`;
}

export {getUrl , setFields} ;