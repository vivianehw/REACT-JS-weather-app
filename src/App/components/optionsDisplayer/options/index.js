import React from "react";
import "../style.css";

import Select from 'react-select';

export default function Options(props) {

    const generalStyles = {
        control: styles => ({
            ...styles,
            marginLeft: 20,
            padding: 5,
            minWidth: 200,
            borderRadius: 3,
            backgroundColor: 'white'
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor:
                    isSelected
                    ? 'black'
                    : isFocused
                    ? '#cecece'
                    : 'white',
                color: isSelected ? 'white' : 'black',
          };
        },
      };

    return (
        <div className="optionsArea">
            <h4>{props.optionName}:</h4>
            <Select
                defaultValue={props.defaultOption}
                options={props.options}
                clearable={false}
                styles={generalStyles}
                onChange={props.changeFunction}
            />
        </div>
    )
};

/*
<Select
                defaultValue={props.defaultOption}
                options={props.options}
                styles={{
                    color: 'red',
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        marginLeft: 15,
                        height: 30,
                        width: 200,
                        borderRadius: 2,
                        textAlign: 'left',
                        fontWeight: '500',
                    }),
                }}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: 'gray',
                        primary: 'black',
                    },
                })}
            />
*/
