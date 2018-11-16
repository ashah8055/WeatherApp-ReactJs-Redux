import Axios from "axios";

const API_KEY = "0aface16b6294bae99a2eecb716ef784";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = Axios.get(url);
    console.log('request', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}