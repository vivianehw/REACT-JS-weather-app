import React from "react";
import './style.css';

import { BsGeoAltFill, BsThermometerHalf } from 'react-icons/bs';

function TemperatureInfo(props) {

    const temp = props.main.temp;
    const feels_like = props.main.feels_like;

    return (
        <div className="infoSquare">

            <div className="temperatureDiv">
                
                <div className="thermometerDiv">
                    <BsThermometerHalf size={60} />
                    <h1 className="h1">
                        {temp}°
                    </h1>
                </div>

                <p className="p">
                    Sensação térmica: {feels_like}°
                </p>

            </div>
        </div>
    )
};

export default TemperatureInfo;

/*
            <section className="localDiv">
                <div className="localDiv">
                    <BsGeoAltFill size={28} />
                    <h3 className="h3">
                        Brasilia
                    </h3>
                </div>

                <div className="dateDiv">
                    <p>20 de janeiro</p>
                    <p>Sexta-feira</p>
                </div>
            </section>
*/
