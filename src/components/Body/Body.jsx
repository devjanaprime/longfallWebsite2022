import { useEffect, useState } from 'react';
import Post from "../Post/Post";
import Article from "../Article/Article";
import MusicRelease from "../MusicRelease/MusicRelease";
import VideoRelease from "../VideoRelease/VideoRelease";


let Body=( props )=>{
    const [ aspectRatio, setAspectRatio ] = useState( 1.0 );
    const [ posts, setPosts ] = useState( [] );
    useEffect(() => {
        function handleResize() {
            setAspectRatio( window.innerWidth / window.innerHeight);
        }
        // get articles
        setPosts( 
            [
                {
                    type: 'article',
                    title: 'Title00',
                    image: 'images/liveAtTreasury_4-15-2022.jpg',
                    text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
                    links: [ { text: `google`, url: `http://google.com` } ]
                },
                {
                    type: 'article',
                    title: 'Title01',
                    image: 'images/liveAtTreasury_4-15-2022.jpg',
                    text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
                    links: [ { text: `google`, url: `http://google.com` } ]
                }, 
                {
                    type: 'video',
                    title: 'Vid Title',
                    id: 'GiyQ1iEU8z8',
                    text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
                    links: [ { text: `google`, url: `http://google.com` } ]
                }, 
                {
                    type: 'music',
                    title: 'Music Title',
                    appleMusicUrl: 'https://embed.music.apple.com/us/album/what-we-found/1492961027',
                    spotifyUrl: 'https://open.spotify.com/embed/album/2xiTZMXThFDUYokKsbZH58?utm_source=generator',
                    text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elfasd awer fawer we` ],
                    links: [ { text: `google`, url: `http://google.com` } ]
                }, 
                {
                    type: 'article',
                    title: 'Title01',
                    image: 'images/liveAtTreasury_4-15-2022.jpg',
                    text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
                    links: [ { text: `google`, url: `http://google.com` } ]
                }, 
                {
                    type: 'video',
                    title: 'Vid Title',
                    id: 'GiyQ1iEU8z8',
                    text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
                    links: [ { text: `google`, url: `http://google.com` } ]
                }, 

            ]
        )
        window.addEventListener('resize', handleResize);
    }, [] );


    return (
    <div className="App-body">
        { posts.map( 
            ( post, i ) =>( 
                        <Post post={ post } aspectRatio={ aspectRatio } index={ i } key ={ i }/> 
                ) 
            )
        };
    
    </div>
    );
}

export default Body;

