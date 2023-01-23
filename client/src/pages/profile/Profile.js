import React from 'react';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';

import Rightbar from '../../components/rightbar/Rightbar';
import "./profile.css"

const Profile = () => {
    return (
        <>


            <div className="profile">
                <Leftbar></Leftbar>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/posts/4.jpg" alt="" className="profileCoverImg" />
                            <img src="assets/person/3.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Marjan</h4>
                            <span className="profileInfoDesc">Hola...</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed></Feed>
                        <Rightbar profile />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Profile;