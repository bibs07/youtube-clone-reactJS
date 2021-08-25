import React from "react";
import "./styles/Recommended.css";
import { VideoCard } from "./VideoCard";

export const Recommended = () => {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommended__videos">
        <VideoCard
          thumbnail={"https://picsum.photos/seed/picsum/200/300"}
          channelPic={"https://picsum.photos/200/300/?blur"}
          title={"Random Title"}
          channelName={"Bibs07"}
          views={"1B Views"}
          time={"1hr ago"}
        />
        <VideoCard
          thumbnail={"https://picsum.photos/seed/picsum/200/300"}
          channelPic={"https://picsum.photos/200/300/?blur"}
          title={"Random Title"}
          channelName={"Bibs07"}
          views={"1B Views"}
          time={"1hr ago"}
        />
        <VideoCard
          thumbnail={"https://picsum.photos/seed/picsum/200/300"}
          channelPic={"https://picsum.photos/200/300/?blur"}
          title={"Random Title"}
          channelName={"Bibs07"}
          views={"1B Views"}
          time={"1hr ago"}
        />
        <VideoCard
          thumbnail={"https://picsum.photos/seed/picsum/200/300"}
          channelPic={"https://picsum.photos/200/300/?blur"}
          title={"Random Title"}
          channelName={"Bibs07"}
          views={"1B Views"}
          time={"1hr ago"}
        />
        <VideoCard
          thumbnail={"https://picsum.photos/seed/picsum/200/300"}
          channelPic={"https://picsum.photos/200/300/?blur"}
          title={"Random Title"}
          channelName={"Bibs07"}
          views={"1B Views"}
          time={"1hr ago"}
        />
        <VideoCard
          thumbnail={"https://picsum.photos/seed/picsum/200/300"}
          channelPic={"https://picsum.photos/200/300/?blur"}
          title={"Random Title"}
          channelName={"Bibs07"}
          views={"1B Views"}
          time={"1hr ago"}
        />
        <VideoCard
          thumbnail={"https://picsum.photos/seed/picsum/200/300"}
          channelPic={"https://picsum.photos/200/300/?blur"}
          title={"Random Title"}
          channelName={"Bibs07"}
          views={"1B Views"}
          time={"1hr ago"}
        />
      </div>
    </div>
  );
};
