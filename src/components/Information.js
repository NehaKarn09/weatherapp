import React, {useState} from 'react'
// import heavy from './heavyRain.png'

export default function Information() {
  const [main,setMain]=useState([]);
  const [wind,setWind]=useState([]);
  const [name,setName]=useState([]);
  const [weather,setWeather]=useState([]);


  const updateWeather= async ()=>
  {
     let url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a38c0ae8517517643fb09d449584fe91&units=metric`;
     let data=await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData)
     setMain(parsedData.main)
     setWind(parsedData.wind)
     setName(parsedData.name)
     setWeather(parsedData.weather);
     
  //    const {weather}=parsedData
  //    const {main,icon}=weather[0];
  //    return{main,icon};
   }

  const handleClick=()=>{
    if(name!==''){
      updateWeather();
    }
  }

  // const iconId = weather.map(()=>{
  //   return weather[0].icon
  // })
 
  return (
   

    <div>
  
  <h1 style={{margin:'50px 0px'}}>Weather Check</h1>        
            
 <div className="input-group mb-3 buddy" >
  <input type="text" style={{margin:'0px 10px',borderRadius:'15px'}} className="form-control" placeholder="Enter City Name" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e=>setName(e.target.value)}/>
  <button className="btn btn-dark" style={{borderRadius:'15px'}} type="button" id="button-addon2" onClick={handleClick}>Search</button>
</div>

<div className="container">
        <div className="main">
          <div className="image">
          <img src={`https://openweathermap.org/img/wn/${weather.map(()=>{return weather[0].icon})}@2x.png`?`https://openweathermap.org/img/wn/${weather.map(()=>{return weather[0].icon})}@2x.png`:''} style={{margin:'-24px -7px'}} className="img-fluid" alt=""/>
          
          
          </div>
         <div className="temp">
          <p>{Math.round(main.temp)?Math.round(main.temp):''}°C</p>
          <p><div style={{margin:'-27px'}}>
            {weather.map(()=>{
              return weather[0].main
            })}</div></p>
         </div>
         <div className="city">
          {name}
         </div>
        </div>
        <div className="bottom">
        <div className="feels">
          <p>Feels Like</p>
           {Math.round(main.feels_like)?Math.round(main.feels_like):''}°C
        </div>
        <div className="humidity">
          <p>Humidity</p>
          {main.humidity}%
        </div>
        <div className="wind">
          <p>Wind Speed</p>
          {wind.speed}m/h
        </div>
        </div>
      </div>

    </div>
  )
}

