import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function ShowMore({content}) {
    const [showMore, displayContent] = useState(false);

    const showMoreClickHandle = () => {
        displayContent(!showMore);
    }

    return (
        <>
            <div id="cardContent">{content}</div>
            {showMore ? <div id="cardContent">{content}</div> : null}
            <div className="show-more" onClick={showMoreClickHandle}>
                {showMore ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}
            </div>
        </>
    );
}

export default ShowMore;