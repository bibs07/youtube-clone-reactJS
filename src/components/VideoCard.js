import React from "react";
import "./styles/VideoCard.css";

export const VideoCard = ({
  thumbnail,
  channelPic,
  title,
  channelName,
  views,
  time,
}) => {
  return (
    <div className="videoCard">
      <img
        src={thumbnail}
        alt="video thumbnail"
        className="videoCard__thumbnail"
      />
      <div className="videoCard__info">
        <img src={channelPic} alt="channel" />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views} • {time}
          </p>
        </div>
      </div>
    </div>
  );
};
