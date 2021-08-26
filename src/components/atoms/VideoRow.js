import React from "react";
import "../styles/VideoRow.css";

export const VideoRow = ({
  thumbnail,
  title,
  channel,
  subscribers,
  views,
  time,
  description,
}) => {
  return (
    <div className="videoRow">
      <div className="videoRow__card">
        <img src={thumbnail} alt="thumbnail" />
        <div className="videoRow__text">
          <h3>{title}</h3>
          <p>
            {channel} • {subscribers} Subscribers {views} views • {time}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
