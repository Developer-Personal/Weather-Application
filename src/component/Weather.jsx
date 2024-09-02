import React, { useState } from 'react'


const Weather = ({setLoader}) => {

    const [city, setCity] = useState("")
    const [addCity, setAddCity] = useState(null)
    const [getWeather, setGetWeather] = useState(null)
    const [error, setError] = useState(false)

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const getWeatherData = async() => {
        
       try {
        setLoader(true)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e929c13b9bcd269b796f62d0ed96d98f&units=metric`)
        const result = await response.json()
        if(result.cod == "404"){
            setError(true)
        }
        else {
            setError(false)
            setGetWeather(result)
        }
        console.log("data-", result)
        
       } catch (error) {
        console.log("error -", error.message);
        
       }
       finally{
        setLoader(false)
       }
     
    }

    const handleClick = (e) => {
       getWeatherData()
       setCity("")
    }

    // const convertIntoCelsius = (temp) => {

    //     const celciusResult = (temp-32)*5/9

    // }
  return (
    <div className='app'>
        <h1 >Weather App</h1>
        <div className='input'>
        <input type="text" value={city} placeholder='Enter city..' onChange={handleCity} />
            <button onClick={handleClick}>Add City</button>
        </div>
            
       
       {error ? <p>City not found</p> : <div className='weather-info'>
            <h2>City Name:{getWeather?.name}</h2>
            <p>Temperature:{getWeather?.main?.temp} &#176;C</p>
            <p>condition: {getWeather?.weather[0]?.main}</p>
        </div>}
      
    </div>
  )
}

export default Weather