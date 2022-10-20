import Article from "../Article/Article";
import MusicRelease from "../MusicRelease/MusicRelease";
import VideoRelease from "../VideoRelease/VideoRelease";


function Body( props ) {
let testArticle = {
    title: 'Title00',
    image: 'images/liveAtTreasury_4-15-2022.jpg'
}

    return (
    <div className="App-body">
        <Article article={testArticle}/>
        <VideoRelease />
        <MusicRelease />
    </div>
    );
}

export default Body;