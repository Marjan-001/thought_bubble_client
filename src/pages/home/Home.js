import React from 'react';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="homeContainer">
                <Leftbar></Leftbar>
                <Feed></Feed>
                <Rightbar></Rightbar>
            </div>
        </div>
    );
};

export default Home;