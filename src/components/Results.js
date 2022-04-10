import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const Results = (props) => {

    const results = props.data;
    let photos;
    if(results.length > 0) {
        photos = results.map(photo => 
            <Photo 
                photoId={photo.id}
                key={photo.secret}
                alt={photo.title}
                secretId={photo.secret}
                serverId={photo.server}
            />
        )
    } else {
        photos = <NotFound />
    }

    return (
        <div className="photo-container">
        <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default Results;