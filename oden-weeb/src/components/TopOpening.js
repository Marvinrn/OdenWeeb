import React from 'react';
import { Top10Op } from '../datas/MyTopsList'
import ReactPlayer from 'react-player'

const TopOpening = () => {
    return (
        <div>
            {Top10Op.map(({ id, rank, anime, youtube }) => {
                return (
                    
                    <div key={id} className="sectionOpening">
                        <h1> {rank} : {anime}</h1>
                        <ReactPlayer 
                        className="youtubePlayer"
                        url={youtube} 
                        controls={true} 
                        width="100%"
                        height="100%"
                        config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' }}}}
                        />
                        
                    </div>
                )
            })}
        </div>
    );
};

export default TopOpening;