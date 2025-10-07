import React, { useEffect, useState } from 'react'
import search_icon from '../assets/images/search.png'
import clear_icon from '../assets/images/clear.png'
import cloud_icon from '../assets/images/cloud.png'
import drizzle_icon from '../assets/images/drizzle.png'
import humidity_icon from '../assets/images/humidity.png'
import rain_icon from '../assets/images/rain.png'
import snow_icon from '../assets/images/snow.png'
import wind_icon from '../assets/images/wind.png'

const Weather = () => {
  const[weatherData,setWeatherData] = useState(false);

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const res = await fetch(url)
      const data = await res.json();
      console.log(data)
      setWeatherData({
        humidity : data.main.humidity,
        windSpeed : data.wind.speed,
        temprature : Math.floor(data.main.temp),
        location : data.name,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    search("Pathankot")
  }, [])

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="search" />
      </div>
      <img src={clear_icon} alt="clear" className='weather-icon' />
      <p className='temprature'>10°C</p>
      <p className='location'>Pathankot</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <div>
            <p>90%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind" />
          <div>
            <p>3.2 km/h</p>
            <span>Wind</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
