import React from 'react';

//Components
import BlogEntry from './BlogEntry';

function Home(){
    return (
        <div className="home-div col-12">
           <BlogEntry className="col-6"/>
        </div>
    )
}

export default Home;