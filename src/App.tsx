import './App.css'
import {useRef} from "react";
import axios from "axios";

function App() {

    const inputRef = useRef<HTMLInputElement>(null);

    async function search() {
        const city: string = inputRef.current!.value;
        const apiKey: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

        const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        console.log(city);
        const data = await axios.get(apiUrl);
        console.log(data);
    }

    return (
        <div>
            <h1>Weather React</h1>
            <input ref={inputRef} type="text" placeholder="Enter city name"/>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default App