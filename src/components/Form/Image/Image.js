import React from 'react';

function Image({title, url, width = 'auto', height = 'auto'}) {
    const styles = {
        width: width,
        height: height,
    };

    return (
        <img style={styles} alt={title} src={url}/>
    );
}

export default Image;