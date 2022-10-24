import { useSelector, useDispatch }from 'react-redux';
import { setAudioSpotify, setAudioAppleMusic } from '../../features/preferencesSlice';

function ToggleAudioPlayer( props ) {
    const state = useSelector( state => state );
    const dispatch = useDispatch();
    return (
    <span>
        { state.preferences.audioPlayer === 'Spotify'
        ? <button onClick={ ()=> dispatch( setAudioAppleMusic() ) }>Apple Music</button>
        :<button onClick={ ()=> dispatch( setAudioSpotify() ) }>Spotify</button>
        }
    </span>
    );
}

export default ToggleAudioPlayer;