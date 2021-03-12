import React, {useState} from "react";

function ShowMore({content}) {
    const [showMore, displayContent] = useState(false);

    const showMoreClickHandle = () => {
        displayContent(!showMore);
    }

    return (
        <>
            <div id="cardContent">{content}</div>
            {showMore ? <div id="cardContent">{content}</div> : null}
            <div className="show-more" onClick={showMoreClickHandle}>{showMore ? '/\\' : '\\/'}</div>
        </>
    );
}

export default ShowMore;