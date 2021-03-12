import React, {useState} from "react";

function MenuLink({link, title, isActive}) {
    const styles = {
        backgroundColor: 'red'
    }

    const [active, setActive] = useState(isActive);

    const menuClickHandler = () => {
        setActive(true)
    }

    return (
        <>
            {
                active ?
                    <a style={styles} href={link} title={title} onClick={menuClickHandler}>{title}</a>
                    : <a href={link} title={title} onClick={menuClickHandler}>{title}</a>
            }
        </>
    );
}

export default MenuLink;