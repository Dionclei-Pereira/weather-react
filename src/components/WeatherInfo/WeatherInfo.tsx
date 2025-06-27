import type {IWeatherResponse} from "../../interfaces/weather-response.interface.ts";


function WeatherInfo({weather}: {weather: IWeatherResponse}) {
    console.log(weather);
    return (
        <div>
            <h2>{weather.name}</h2>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
            </div>
            <p>{Math.round(weather.main.temp)}°C</p>
        </div>
    )
}

export default WeatherInfo