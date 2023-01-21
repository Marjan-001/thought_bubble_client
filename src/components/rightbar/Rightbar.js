import React from 'react';
import "./righgtbar.css"
import { Users } from "../../fakeData"
import Online from '../online/Online';

const Rightbar = ({ profile }) => {

    const HomeRightbar = () => {
        return (

            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className="birthdayText"> <b>Lara</b> and <b>3 other friends</b> have a birthday today.</span>

                </div>

                <div className="rightbarTitle">Online Friends</div>
                <ul className="rightbarFriendList">
                    {
                        Users.map(u => (
                            <Online
                                key={u.id}
                                user={u}
                            />
                        ))
                    }
                </ul>


            </>


        )
    }

    const ProfileRightbar = () => {

        return (
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">Chittagong </span>

                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Bangladesh</span>

                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">Single</span>

                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" className='rightbarFollowingImg' alt="" />
                        <span className="rightbarFollowingName">Fariha</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpg" className='rightbarFollowingImg' alt="" />
                        <span className="rightbarFollowingName">Shama</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpg" className='rightbarFollowingImg' alt="" />
                        <span className="rightbarFollowingName">Fahmida</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/5.jpg" className='rightbarFollowingImg' alt="" />
                        <span className="rightbarFollowingName">Farhana</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.jpg" className='rightbarFollowingImg' alt="" />
                        <span className="rightbarFollowingName">Anika</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/7.jpg" className='rightbarFollowingImg' alt="" />
                        <span className="rightbarFollowingName">Ananya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/8.jpg" className='rightbarFollowingImg' alt="" />
                        <span className="rightbarFollowingName">Lara</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightBar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
};

export default Rightbar;