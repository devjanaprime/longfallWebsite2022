import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function VideoRelease( props ) {
  return (
  <div className="App-article">
    <hr />
    <h1>Video title</h1>
      <LiteYouTubeEmbed 
        id="GiyQ1iEU8z8"
        title="Underground In A City Of Skyscrapers (official music video)"
    />
    <p><i>by line</i></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>    
  </div>
  );
}

export default VideoRelease;