import React, { useState } from "react";
import StoryImg from "./componeants/StoryImg";
import './Stories.css'
function Storys() {
  const [stories, setStories] = useState([
    {
      img: "https://images.pexels.com/photos/4519471/pexels-photo-4519471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50&h=50",
      isReadded: false,
      username: "sergey",
      id: 1,
    },

    {
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50&h=50",
      isReadded: false,
      username: "sasha",
      id: 2,
    },
  ]);
  const handleReadingStory = (id) => {
    const usr = stories.find((user) => user.id === id);
    const updatedStroies = stories.map((user) => {
      if (usr.id === user.id) {
        user.isReadded = true;
      }
      return user;
    });
    setStories(updatedStroies);
  };

  return (
    <div className="container-stories">
      {stories.map((story) => (
        <StoryImg user={story} onClick={(id) => handleReadingStory(id)} />
      ))}
    </div>
  );
}

export default Storys;
