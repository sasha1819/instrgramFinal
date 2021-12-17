import React from 'react'
import './StoryImg.css'


function StoryImg({ user ,onClick }) {

    const {img, username, isReadded, id} = user

    const storyClick = ()=> {
        onClick(id)
    }

    const setError = ()=> {
            alert('1')
        
    }


    return (
        <div 
            className="container-story"
            onClick={storyClick}>
                <div className={`container-story-img ${isReadded ? 'reading' : 'not-reading'}`}>
                    <img 
                        className="image" 
                        src={img} 
                        alt="story-img" 
                        onerror={setError}/>
                </div>
                <div className="user-name">
                    <p>{username}</p>
                </div>
        </div>
    )
}

export default StoryImg
