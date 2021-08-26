import React from "react";
import "./styles/SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
//Importing components
import { VideoRow } from "./atoms/VideoRow";
import { ChannelRow } from "./atoms/ChannelRow";

export const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h4>Filter</h4>
      </div>
      <hr />
      <ChannelRow
        image={"https://picsum.photos/id/237/500/500"}
        channel={"channel"}
        verified
        subs={"1M"}
        videoNo={200}
        description={
          "usdgfusgdfusgfusgfbawiuegfb zisugfziu ziudifbvuif iiuf vfbapwefuid faiu bfdHSJb fzjhdfbzsjhdfzhjsdvlzjsgfisdufhzjgbv"
        }
      />
      <hr />
      <h2>Latest from </h2>
      <VideoRow
        thumbnail={"https://picsum.photos/600"}
        title={"title"}
        channel={"channel"}
        views={"5B"}
        subscribers={"1M"}
        time={"2 minutes ago"}
        description={
          "loewm=aAHFsfd aksf ssdhsjgkaegfbudgfbdugfbjhflcbzeurzblseiuhrbiuefh ziufziu zuirgzfb"
        }
      />
      <VideoRow
        thumbnail={"https://picsum.photos/600"}
        title={"title"}
        channel={"channel"}
        views={"5B"}
        subscribers={"1M"}
        time={"2 minutes ago"}
        description={
          "loewm=aAHFsfd aksf ssdhsjgkaegfbudgfbdugfbjhflcbzeurzblseiuhrbiuefh ziufziu zuirgzfb"
        }
      />
      <VideoRow
        thumbnail={"https://picsum.photos/600"}
        title={"title"}
        channel={"channel"}
        views={"5B"}
        subscribers={"1M"}
        time={"2 minutes ago"}
        description={
          "loewm=aAHFsfd aksf ssdhsjgkaegfbudgfbdugfbjhflcbzeurzblseiuhrbiuefh ziufziu zuirgzfb"
        }
      />
      <VideoRow
        thumbnail={"https://picsum.photos/600"}
        title={"title"}
        channel={"channel"}
        views={"5B"}
        subscribers={"1M"}
        time={"2 minutes ago"}
        description={
          "loewm=aAHFsfd aksf ssdhsjgkaegfbudgfbdugfbjhflcbzeurzblseiuhrbiuefh ziufziu zuirgzfb"
        }
      />
      <VideoRow
        thumbnail={"https://picsum.photos/600"}
        title={"title"}
        channel={"channel"}
        views={"5B"}
        subscribers={"1M"}
        time={"2 minutes ago"}
        description={
          "loewm=aAHFsfd aksf ssdhsjgkaegfbudgfbdugfbjhflcbzeurzblseiuhrbiuefh ziufziu zuirgzfb"
        }
      />
      <VideoRow
        thumbnail={"https://picsum.photos/600"}
        title={"title"}
        channel={"channel"}
        views={"5B"}
        subscribers={"1M"}
        time={"2 minutes ago"}
        description={
          "loewm=aAHFsfd aksf ssdhsjgkaegfbudgfbdugfbjhflcbzeurzblseiuhrbiuefh ziufziu zuirgzfb"
        }
      />
    </div>
  );
};
