import { useState } from 'react';


let MusicRelease=( props )=>{
const [ spotify, setSpotify ] = useState( true );

  return (
  <div className="App-article">
    <hr />
      <h1>{ props.post.title }</h1>
      { spotify
        ?<div><iframe 
          src={ props.post.spotifyUrl }
          width="55%" 
          height="420"
        />
        <p>Switch to <span onClick={ ()=> setSpotify( !spotify  ) }>Apple Music</span></p></div>
        :<div className=''><iframe 
          src={ props.post.appleMusicUrl }
          width="55%" 
          height="420"
        />
        <p>Switch to <span onClick={ ()=> setSpotify( !spotify  ) }>Spotify</span></p></div>
        }      
        {props.post.text.map( ( line, i ) =>( <p key={ i }>{line}</p> ) )}
        <h5>Related: {props.post.links.map( ( link, i )=>( <a key={ i } href={ link.url }>{ link.text }</a> ) ) }</h5>
        <br clear="all" />
   </div>
  );
}

export default MusicRelease;