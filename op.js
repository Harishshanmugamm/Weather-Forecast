const url=localStorage.getItem("json");
const url1=localStorage.getItem("xml");
const url2=localStorage.getItem("xxx");


fetch(url2).then((response) =>(response.json())).then(result2 =>weatherD2(result2));


const timeop=document.querySelector('.time');//
const contop=document.querySelector('.cont');
const nameop=document.querySelector('.namex');//
const icon=document.querySelector('.icon');//
const cloudop=document.querySelector('.cloud');//
const vis=document.querySelector('.visi');
const humidop=document.querySelector('.humidity');//
const windop=document.querySelector('.wind');
const temp=document.querySelector('.temp');//
const app=document.querySelector('.weathero');//
const dateop=document.querySelector('.date')//
const condiop=document.querySelector('.condi');//
const desop=document.querySelector('.des');//
const uv=document.querySelector('.uv');//
const pm=document.querySelector('.pm');//
const pm1=document.querySelector('.pm1');//

fetch(url).then((response) =>(response.json())).then(result =>weatherD(result));
fetch(url1).then((response) =>(response.json())).then(result1 =>weatherD1(result1));

function dofw(day,month,year){
    const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()]}
     
function dt(){
        var date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate =`${dofw(day, month, year)} ${day}/${month}/${year}`;
        dateop.innerHTML=currentDate;
        let h=date.getHours(); 
        let m=date.getMinutes(); 
        let currenttime = `${h}:${m}`;
        timeop.innerHTML=currenttime;
 }
function city(y){
        let name=y.name;
        let count=y.sys.country;
        nameop.innerHTML=name+","+count;
    }
function thvcw(y){
        let humid=y.main.humidity;
        humidop.innerHTML=humid+" %";
        let visib=y.visibility;
        vis.innerHTML=visib+" meters";
        let wind=y.wind.speed;
        windop.innerHTML=wind+" km/hr";
        let cloud=y.clouds.all;
        cloudop.innerHTML=cloud+" %";
        tempx=Math.round(y.main.temp);
        temp.innerHTML=tempx +"&#176C";
        desop.innerHTML=y.weather[0].description;}
function iconx(y){
    const iconId =(y.weather[0].icon)+".png";
    icon.src="http://openweathermap.org/img/wn/"+iconId;
    const cond=y.weather[0].main;
    condiop.innerHTML=cond;

    }

    const ds =new Date();
    const weekday= [ "Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    function CheckDay(day){
    if(day+ds.getDay() > 6){
            return day+ds.getDay()-7;
    }
    else{
            return day+ds.getDay();
    }
}


    function weatherD1(x){
        console.log(x)
    dt();
    city(x);
    thvcw(x);
    iconx(x);
    }

    function weatherD(z){
        var s =1;
        var m=1;
        console.log(z)
        
        for (var i = 0; i < z.list.length; i++) {
            if (z.list[i].dt_txt.includes("12:00:00")) {
                
              
                document.getElementById("d"+(s)).innerHTML="Temp:"+Number(Math.round( z.list[i].main.temp)).toFixed(1)+"&#176C";
                document.getElementById("n"+(s)).innerHTML=z.list[i].weather[0].main;
                document.getElementById("i"+(s)).src="http://openweathermap.org/img/wn/"+(z.list[i].weather[0].icon)+".png";
                document.getElementById("h"+(s)).innerHTML="Humi:"+(z.list[i].main.humidity)+"%";
                document.getElementById("s"+(s)).innerHTML=weekday[CheckDay(s)];
                s+=1;}
        
        if (z.list[i].dt_txt.includes("21:00:00")) {
                
            document.getElementById("dn"+(m)).innerHTML="Temp:"+Number(Math.round(z.list[i].main.temp)).toFixed(1)+"&#176C";
            document.getElementById("nn"+(s)).innerHTML=z.list[i].weather[0].main;
            document.getElementById("in"+(m)).src="http://openweathermap.org/img/wn/"+(z.list[i].weather[0].icon)+".png";
            document.getElementById("hn"+(m)).innerHTML="Humi:"+(z.list[i].main.humidity)+"%";
            document.getElementById("sn"+(m)).innerHTML=weekday[CheckDay(m)];
            m+=1;}
    }} 
        
        
  function weatherD2(res){
    console.log(res);
    const uvx=res.current.uv;
    uv.innerHTML=uvx;
    const PM2=Math.round(res.current.air_quality.pm2_5);
    pm.innerHTML=PM2;
    const PM11=Math.round(res.current.air_quality.pm10);
    pm1.innerHTML=PM11;
      let x=res;
        let tof="day";
        const c=res.current.condition.code;
        if(!res.current.is_day){
            tof="night";
        }
        if(c == 1000){
            app.style.backgroundImage=`url(./img/${tof}/clear.jpg)`;
            opacity=1;
        }
        else if(
            c == 1003||c==1006||c==1009||c==1030||c==1069||c==1087||c==1135||c==1273||c==1276||c==1279||c==1282)
            {
                app.style.backgroundImage=`url(./img/${tof}/cloudy.jpg)`
            }
        else if(c == 1063 || c == 1069 || c == 1072 ||c == 1150 ||c == 1153 ||c == 1180 ||c == 1183 || c== 1186 || c ==1189 || c == 1192 || c == 1195 || c == 1204 || c == 1207 || c == 1240 || c == 1243 ||c == 1246 ||c == 1249 ||c == 1252)
        {
            app.style.backgroundImage=`url(./img/${tof}/rain.jpg)`
            
        }
        else{
            app.style.backgroundImage=`url(./img/${tof}/snow.jpg)`
        }}
     

    





