function MusicRelease( props ) {
  return (
  <div className="App-article">
    <hr />
      <h1>MusicRelease</h1>
      <iframe 
        src="https://open.spotify.com/embed/album/2xiTZMXThFDUYokKsbZH58?utm_source=generator" 
        width="50%" 
        height="420"
      />

      <iframe 
        src="https://embed.music.apple.com/us/album/what-we-found/1492961027"
        width="50%" 
        height="420"
      />
   </div>
  );
}

export default MusicRelease;