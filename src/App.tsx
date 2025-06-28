import './App.css'
import {useRef, useState} from "react";
import axios from "axios";
import type {IWeatherResponse} from "./interfaces/weather-response.interface.ts";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo.tsx";

function App() {

    const inputRef = useRef<HTMLInputElement>(null);

    const [weather, setWeather] = useState<IWeatherResponse | null>(null);

    async function search() {
        const city: string = inputRef.current!.value;
        const apiKey: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

        const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

        const apiResponse = await axios.get<IWeatherResponse>(apiUrl);
        setWeather(apiResponse.data);
    }

    return (
        <div className='container'>
            <h1 className='title'>Weather React</h1>
            <input ref={inputRef} type="text" placeholder="Enter city name"/>
            <button onClick={search}>Search</button>

            <div className='weather-info'>
                {weather && <WeatherInfo weather={weather} />}
            </div>
        </div>
    )
}

export default App