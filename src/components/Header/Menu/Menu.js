import React from "react";

import MenuLink from "../MenuLink";
import './menu.css';

function Menu() {
    return (
        <div className="main-menu">
            <MenuLink link="/" title="Home" isActive/>
            <MenuLink link="/about" title="About"/>
            <MenuLink link="/contact" title="Contact"/>
            <MenuLink link="/posts" title="Posts"/>
        </div>
    );
}

export default Menu;