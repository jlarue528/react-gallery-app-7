import React from 'react';

const Photo = (props) => {
    let ownerId = props.ownerId;
    let photoId = props.photoId

    return (
        <div className="photo-container">
                <ul>
                    <li>
                        <img src={`https://www.flickr.com/photos/${ownerId}/${photoId}`} alt={props.alt}/>
                    </li>
                </ul> 
        </div>
    )
}

export default Photo;