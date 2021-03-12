import React from 'react';
import {getColor} from "../Button/getColor";

function Input({bgColor = 'black', color = 'white', brdSize = '1', brdRadius = '0', brdColor = 'black'}) {
    const styles = {
        backgroundColor: getColor(bgColor),
        color: getColor(color),
        borderWidth: brdSize + 'px',
        borderRadius: brdRadius + 'px',
        borderColor: brdColor,
        margin: 20,
        padding: 20
    };

    return (
        <input style={styles}/>
    );
}

export default Input;