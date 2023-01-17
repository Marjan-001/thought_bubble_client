import React from 'react';
import "./righgtbar.css"
import { Users } from "../../fakeData"
import Online from '../online/Online';

const Rightbar = () => {

    return (
        <div className='rightBar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className="birthdayText"> <b>Lara</b> and <b>3 other friends</b> have a birthday today.</span>

                </div>
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
        </div>
    );
};

export default Rightbar;