import React, { useState } from "react";
import Hero from "./componeant/Hero";
import SuggestionsTitle from "./componeant/SuggestionsTitle";
import './Main.css'

function Main() {
  const [header, setHeader] = useState({
    img: "https://images.pexels.com/photos/4519471/pexels-photo-4519471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50&h=50",
    username: "sergey",
    subtitle: "hello",
  });

  const [suggestions, setSuggestios] = useState([
    {
      img: "https://images.pexels.com/photos/4519471/pexels-photo-4519471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50&h=50",
      username: "sergey",
      subtitle: "hello",
    },
{
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50&h=50",
    username: "sasha",
    subtitle: "hello",
}]);



  return (
  <div className="main-container">
    <div className="hero-container"></div>
         <Hero isSugation={false}  user={header} />
         <SuggestionsTitle title="Suggestions For You" labelBtn="See All"/>
         {suggestions.map(suggestion => <Hero isSugation={true} user={suggestion} />)}
  </div>
  )
}


export default Main;
