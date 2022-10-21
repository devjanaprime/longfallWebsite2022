import { useState } from 'react';


let MusicRelease=( props )=>{
const [ spotify, setSpotify ] = useState( true );

  return (
  <div className="App-article">
    <hr />
      <h1>Title</h1>

      { spotify
        ?<div><iframe 
          src="https://open.spotify.com/embed/album/2xiTZMXThFDUYokKsbZH58?utm_source=generator" 
          width="50%" 
          height="420"
        />
        <p>Switch to <span onClick={ ()=> setSpotify( !spotify  ) }>Apple Music</span></p></div>
        :<div className=''><iframe 
          src="https://embed.music.apple.com/us/album/what-we-found/1492961027"
          width="50%" 
          height="420"
        />
        <p>Switch to <span onClick={ ()=> setSpotify( !spotify  ) }>Spofity</span></p></div>
        }
        <p> Descirption</p>
   </div>
  );
}

export default MusicRelease;