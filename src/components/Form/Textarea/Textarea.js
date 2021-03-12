import React from 'react';
import {getColor} from "../Button/getColor";

function Textarea({bgColor = 'black', color = 'white', brdSize, brdRadius, brdColor = 'black'}) {
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
        <textarea style={styles} placeholder="Type sth in textarea..."/>
    );
}

export default Textarea;