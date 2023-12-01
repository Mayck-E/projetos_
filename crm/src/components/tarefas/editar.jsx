import { useState } from 'react';

function Gif() {
    const [played, setPlayed] = useState(false);

    function playGIF() {
        if (!played) {
            setPlayed(true);
        }
    }

    return (

        <img src="seu_gif.gif"
        onMouseOver={playGIF}
        alt="GIF"className="imgs-crud"/>
    );
}

export default Gif;