import React from 'react';

function Avatar({className, avatar, textColor = 'white', height = 40, width = 40}) {
    const styles = {
        alignItems: 'center',
        backgroundColor: '#f44336',
        borderRadius: 50 + '%',
        color: textColor,
        display: 'flex',
        flexShrink: 0,
        fontSize: 1.25 + 'rem',
        height: height,
        justifyContent: 'center',
        lineHeight: 1,
        marginRight: 20,
        overflow: 'hidden',
        position: 'relative',
        width: width
    };

    return (
        <div style={styles} className={className}>{avatar}</div>
    );
}

export default Avatar;