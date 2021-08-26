import React from "react";
import "../styles/ChannelRow.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  videoNo,
  description,
}) => {
  return (
    <div className="channelRow">
      <img src={image} alt="channel" />
      <div className="channelRow__text">
        <div className="channelRow__heading">
          <h2>{channel}</h2>
          {verified && <CheckCircleOutlineIcon />}
        </div>
        <div className="channelRow__description">
          <p>
            {subs} subscribers • {videoNo} videos
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
