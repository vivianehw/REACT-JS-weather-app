import React from "react";
import './style.css';

import TemperatureInfo from "./informations/temperatureInfo";
import WeatherIcon from "./informations/weatherIcon";
import AditionalInfo from "./informations/aditionalInfo";

/*
icon, temperatura, description, sensação térmica,
pressão, humidade(%), temp-max, temp-min
*/

function InfoDisplayer(props) {
    return (
        <div>
            <div className="localInfoArea">
                <p>teste</p>
            </div>

            <div className="weatherInfoArea">
                <TemperatureInfo main={props.data.main} />
                <WeatherIcon weather={props.data.weather[0]} />
                <AditionalInfo {...props} />
            </div>
        </div>
    )
};

export default InfoDisplayer;
