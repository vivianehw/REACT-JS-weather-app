import React from "react";
import './style.css';

function WeatherIcon(props) {

    const desc = props.weather.description;
    const icon = props.weather.icon;

    return (
        <div className="infoSquare">
            <h2 className="sub">
                {desc[0].toUpperCase() + desc.substring(1)}
            </h2>
            <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={'Weather icon'}
            />
        </div>
    )
};

export default WeatherIcon;
