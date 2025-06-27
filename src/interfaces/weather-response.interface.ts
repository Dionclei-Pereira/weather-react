import type {IWeatherInfoResponse} from "./weather-info.response.interface.ts";

export interface IWeatherResponse {
    name: string;
    weather: IWeatherInfoResponse[];
}