import React from 'react'
import './Post.css';
import Avatar from '@mui/material/Avatar';
function Post({caption,username,imageUrl}) {
    return (
        <div className='post'>
{/* header=avatar + username */}
{/* image */}
{/* username + caption */}
<div className='post__header'>
<Avatar className='post__avatar' alt="Remy Sharp" src={imageUrl} />
<h3>{username}</h3>
</div>
<img className='post__image' src={imageUrl} alt="userImage" />

<h4 className='post__text'> <strong>{username}</strong> {caption} </h4>

        </div>
    )
}

export default Post;
