import axios from "axios";

const url = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5`
})

//`https://api.openweathermap.org/data/2.5/weather?appid=1dde3934ce45276ae0e95444f4b8b643&lat=44.34&lon=10.99`
//`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}/&lat=44.34&lon=10.99`

export default url;
