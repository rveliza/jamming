import React from "react";
import TrackList from "../TrackList/TackList";
import './Playlist.css';

class Playlist extends React.Component {
    render() {
        return(
            <div className="Playlist">
                <TrackList />
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;