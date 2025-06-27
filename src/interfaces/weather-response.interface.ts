import type {IWeatherInfoResponse} from "./weather-info.response.interface.ts";
import type {IWeatherMainResponse} from "./weather-main.response.interface.ts";

export interface IWeatherResponse {
    name: string;
    weather: IWeatherInfoResponse[];
    main: IWeatherMainResponse;
}