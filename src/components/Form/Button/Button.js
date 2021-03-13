import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

import {getColor} from "./getColor";

library.add(fas)

function Button({children, icon, bgColor = 'black', color = 'white'}) {
    const styles = {
        backgroundColor: getColor(bgColor),
        color: getColor(color),
        margin: 20,
        padding: 20,
        span: {
            marginLeft: 0.5 + 'rem'
        }
    };

    return (
        <button style={styles}>
            <FontAwesomeIcon icon={icon}/>
            <span style={styles.span}>{children}</span>
        </button>
    )
}

export default Button;