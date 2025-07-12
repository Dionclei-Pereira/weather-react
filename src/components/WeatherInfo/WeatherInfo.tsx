import type {IWeatherResponse} from "../../interfaces/weather-response.interface.ts";
import './WeatherInfo.css'

function WeatherInfo({weather}: {weather: IWeatherResponse}) {
    console.log(weather);
    return (
        <div>
            <h2>{weather.name}</h2>
            <div className='weather-icon'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <p>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className='weather-description'>{weather.weather[0].description}</p>
            <div className='weather-details'>
                <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Pressure: {weather.main.pressure} hPa</p>
            </div>
        </div>
    )
}

export default WeatherInfo