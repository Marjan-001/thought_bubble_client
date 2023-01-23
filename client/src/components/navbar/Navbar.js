import React from 'react';
import "./Navbar.css"
// import log from "../lo7.png"
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='topbarContainer'>

            <div className="topbarLeft">
                <span className="logo">Thought Bubble</span>
            </div>
            <div className="topbarCenter">
                <div className='searchbar'>
                    <Search className='searchIcon' />
                    <input placeholder='Search for friend , post or video' className="searchInput" />
                </div>
            </div>

            <div className="topbarRight">
                <div className="tobarLinks">
                    <Link to='/' className='topbarLink'><span >Homepage</span></Link>
                    <span className='topbarLink'>Timeline</span>
                    <Link to="/login" className='topbarLink'>Login</Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to="/profile"><img src="/assets/person/3.jpg" alt="" className="topbarImg" /></Link>
            </div>

        </div>

    );
};

export default Navbar;
