import React, { useState } from "react";
import "./style.css";

import Options from "./options";
import unitList from "../../assets/unit";
import langList from "../../assets/lang";

export default function OptionsDisplayer(props) {

    const [unitChoice, setUnitChoice] = useState('standard');
    const [langChoice, setLangChoice] = useState('pt_br');

    props.push_data(unitChoice, langChoice);

    return (
        <div className="headerBar" >
            <Options
                defaultOption={unitList[1]}
                optionName={'UNIT OF MEASUREMENT'}
                options={unitList}
                changeFunction={(choice) => setUnitChoice(choice.value)}
            />
            <Options
                defaultOption={langList[31]}
                optionName={'LANGUAGE'}
                options={langList}
                changeFunction={(choice) => setLangChoice(choice.value)}
            />
        </div>
    )
};
