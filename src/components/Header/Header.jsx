import { useSelector, useDispatch }from 'react-redux';
import { setAudioSpotify, setAudioAppleMusic } from '../../features/preferencesSlice';

function Header( props ) {
    const state = useSelector( state => state );
    const dispatch = useDispatch();
    return (
    <div className="App-header">
        <h1>Longfall</h1>
        <h2>Groovy Alt-Pop from the Twin Cities</h2>
        <p>"Longfall makes fragile, grandiose, soundscape rock, with a sweeping epic feel enabled and undercut by how often they interrupt or redirect their seeping electronic groove."
Lucas Fagen, City Pages</p>
        <p>State: { JSON.stringify( state ) } </p>
        <button onClick={ ()=> dispatch( setAudioAppleMusic() ) }>Apple Music</button>
        <button onClick={ ()=> dispatch( setAudioSpotify() ) }>Spotify</button>
    </div>
    );
}

export default Header;