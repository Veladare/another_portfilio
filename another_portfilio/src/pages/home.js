import React from 'react';

const Home = () =>{
return(
    <div>
        hello world
        <div className="videos">
          <h1>Videos</h1>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/Ul3y1LXxzdU" 
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
    </div>
    )
};

export default Home;