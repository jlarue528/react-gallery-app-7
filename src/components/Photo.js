import React from 'react';

const Photo = (props) => {
    let photoId = props.photoId;
    let serverId = props.serverId;
    let secret = props.secretId;

    return (
        <div className="photo-container">
                <ul>
                    <li>
                        <img src={`https://live.staticflickr.com/${serverId}/${photoId}_${secret}_w.jpg`} alt={props.alt}/>
                    </li>
                </ul> 
        </div>
    )
}

export default Photo;