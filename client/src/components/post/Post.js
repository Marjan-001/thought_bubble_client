import { MoreVert } from '@material-ui/icons';
import React from 'react';
import "./post.css";
import { Users } from "../../fakeData"
import { useState } from 'react';

const Post = ({ post }) => {
    // const user = Users.filter(u => u.id === 1);
    // console.log(user);
    // console.log(post);
    const { desc, photo, date, id, comment, userId } = post
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u => u.id === post?.userId)[0]?.profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter(u => u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt=""
                            onClick={likeHandler}
                            className="likeIcon" />
                        <img src="assets/heart.png" alt=""
                            onClick={likeHandler}
                            className="likeIcon" />
                        <span className="postLikeCounter">{like} people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Post;