let url;//for 5 days forecast
let url1;//for current weather
let url2;
let cityx;
const box= document.querySelector(".box");
let inputx= box.querySelector(".inputx");
let show=inputx.querySelector(".citybar");
let search=inputx.querySelector("input");
let userloc=inputx.querySelector("button");





search.addEventListener("keyup",x=>{
    if(x.key=="Enter" && search.value!=" "){
        requestApi(search.value);
    }
});

userloc.addEventListener("click", ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else{
        alert("Your browser not support Geolocation");
    }
});

function onSuccess(pos){
    const {latitude,longitude} = pos.coords;
    url1=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=7ccb7652c210c1858f2a8d9c94e4e986`;
    url=`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=7ccb7652c210c1858f2a8d9c94e4e986`;
    url2=`https://api.weatherapi.com/v1/current.json?key=02367671b3bf444cb3d181600222612&q=${latitude},${longitude}&aqi=yes`

    fetchd();
}
function onError(api) {

    alert('Your location access denied.\n So Loading default city :Delhi')
    cityx="delhi"
    url1=`https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=7ccb7652c210c1858f2a8d9c94e4e986`
    url='https://api.openweathermap.org/data/2.5/forecast?q=delhi&units=metric&appid=7ccb7652c210c1858f2a8d9c94e4e986';
    url2=`https://api.weatherapi.com/v1/current.json?key=02367671b3bf444cb3d181600222612&q=Delhi,in&aqi=yes`
    fetchd();
}


function requestApi(city){
    cityx=city;
    url1=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7ccb7652c210c1858f2a8d9c94e4e986`;
    url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=7ccb7652c210c1858f2a8d9c94e4e986`;
    url2=`https://api.weatherapi.com/v1/current.json?key=02367671b3bf444cb3d181600222612&q=${city}&aqi=yes`
    fetchd();
}


function red(){
    window.location.replace("output.html");
}


/*Day of the week*/
function dofw(day,month,year)
{
    const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()]
}
/*---------------------------------------------*/

function fetchd(){
    show.innerText="Gathering Weather Details...";
    show.classList.add("pending");
    fetch(url).then((response) =>(response.json())).then(result =>weatherD(result));

}

function weatherD(info)
  { show.classList.replace("pending","error");
   if((info.cod=="404") || info.cod=="400")
{
    show.innerText = `${search.value} please enter the valid City Name`;
}else{
    show.classList.remove("pending","error");
    localStorage.setItem("json",url);
    localStorage.setItem("xml",url1);
    localStorage.setItem("xxx",url2);

    red();

}
  }















































































