import React from "react";

const colors = {
    alizarin: '#e74c3c',
    amethyst: '#9b59b6',
    azbestos: '#7f8c8d',
    belize_hole: '#2980b9',
    carrot: '#e67e22',
    clouds: '#ecf0f1',
    concrete: '#95a5a6',
    emerald: '#2ecc71',
    green_sea: '#16a085',
    midnight_blue: '#2c3e50',
    nephritis: '#27ae60',
    orange: '#f39c12',
    peter_river: '#3498db',
    pomegranate: '#c0392b',
    pumpkin: '#d35400',
    silver: '#bdc3c7',
    sun_flower: '#f1c40f',
    turquoise: '#1abc9c',
    wet_asphalt: '#34495e',
    wisteria: '#8e44ad'
};

function getColor(color) {
    let stripColor = color.replace(/ /g, '_');

    return colors[stripColor] !== undefined ? colors[stripColor] : color;
}

export {getColor};