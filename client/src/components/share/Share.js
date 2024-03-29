import React from 'react';
import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/3.jpg" className='shareProfileImg' alt="" />
                    <input type="text" className='shareInput' placeholder="What's in your mind" />
                </div>
                <hr className='shareHr' />

                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className="shareIcon" />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue' className="shareIcon" />
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className="shareIcon" />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className="shareIcon" />
                            <span className='shareOptionText'>Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
