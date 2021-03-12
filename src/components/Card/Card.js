import React from 'react';

import {Image} from '../Form'
import {Avatar} from '../User'
import {ShowMore} from '../Utils'
import './card.css';

function Card({title, avatarText, date, intro, content, imageUrl, imageTitle, showMore}) {
    return (
        <div className='card'>
            <div className='header'>
                <Avatar className='avatar' avatar={avatarText}/>
                <div className='content'>
                    <div>{title}</div>
                    <div className='date'>{date}</div>
                </div>
            </div>
            <Image title={imageTitle} url={imageUrl}/>
            <div className="content">
                <div className="intro">{intro}</div>
                {showMore ? <ShowMore content={content}/> : null}
            </div>
        </div>
    );
}

export default Card;