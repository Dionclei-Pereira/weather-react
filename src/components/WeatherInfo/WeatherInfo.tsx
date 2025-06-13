import type {IWeatherResponse} from "../../interfaces/weather-response.interface.ts";


function WeatherInfo({weather}: {weather: IWeatherResponse}) {
    return (
        <div>
            <h2>{weather.name}</h2>
        </div>
    )
}

export default WeatherInfo