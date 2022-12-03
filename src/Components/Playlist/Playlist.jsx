import React from "react";
import './Playlist.css';

class Playlist extends React.Component {
    render() {
        return(
            <div className="Playlist">
                {/* Add a Tricklist Component */}
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;