import React from 'react'
import './StoryImg.css'
function StoryImg(props) {
    return (
        <div onClick={() => props.onClick(props.user.id)} className="container-story">
            <div className={`container-story-img ${props.user.isReadded ? 'reading' : 'not-reading'}`}>
                <img className="image" src={props.user.img} alt="story-img" onerror={()=>{
                    alert('1')
                }}/>
            </div>
            <div className="user-name">
                    <p>{props.user.username}</p>
            </div>
        </div>
    )
}

export default StoryImg
