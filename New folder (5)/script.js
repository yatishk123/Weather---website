const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity =document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
 const weather_body=document.querySelector('.weather-body');
 async function checkWeather(city)
{
    const api_key="1e525b08b93bf84d06805b1d26074053";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data= await fetch(`${url}`).then(response=>response.json());
    if(weather_data.cod==`404`)
    {
        location_not_found.style.display = "flex";
        weather_body.style.display="none";
        console.log("error");
        return ;
    }location_not_found.style.display = "none";
    weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
     description.innerHTML=`${weather_data.weather[0].description}`;
     humidity.innerHTML=`${weather_data.main.humidity}%`;
     wind_speed.innerHTML=`${weather_data.wind.speed}Km/h`;


     switch(weather_data.weather[0].main)
     {
        case 'Clouds':
            weather_img.src="/ff476f253a4695d1e499e1e96a5793c1.jpg";
            break;
        case 'Clear':
            weather_img.src="clipart-sun-png-transparent-onlygfxm-0.png";  
            break;
        case 'Rain':
            weather_img.src="transparent-download-green-cloud-with-rain-clipart-png-23.png"; 
            break;
        case 'Smoke':
            weather_img.src="images.jpg";
            break;
     }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});