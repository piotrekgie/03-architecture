import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser, faCoffee, faExclamation} from '@fortawesome/free-solid-svg-icons'

import {getColor} from "./getColor";

library.add(faUser, faCoffee, faExclamation)

function Button({children, icon, bgColor = 'black', color = 'white'}) {
    const styles = {
        backgroundColor: getColor(bgColor),
        color: getColor(color),
        margin: 20,
        padding: 20
    };

    return (
        <button style={styles}>
            {children}
            <FontAwesomeIcon icon={icon}/>
        </button>
    )
}

export default Button;