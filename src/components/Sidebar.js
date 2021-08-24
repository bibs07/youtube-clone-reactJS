import React from "react";
import "./styles/Sidebar.css";
import { SidebarRow } from "./atoms/SidebarRow";
//Importing icons from Material UI
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow title={"Home"} Icon={HomeRoundedIcon} selected />
      <SidebarRow title={"Explore"} Icon={ExploreIcon} />
      <SidebarRow title={"Subscriptions"} Icon={SubscriptionsIcon} />
      <SidebarRow title={"Originals"} Icon={YouTubeIcon} />
      <SidebarRow title={"Youtube Music"} Icon={PlayCircleFilledIcon} />
      <hr />
      <SidebarRow title={"Library"} Icon={VideoLibraryIcon} />
      <SidebarRow title={"History"} Icon={HistoryIcon} />
      <SidebarRow title={"Your videos"} Icon={OndemandVideoIcon} />
      <SidebarRow title={"Watch later"} Icon={WatchLaterIcon} />
      <SidebarRow title={"Liked videos"} Icon={ThumbUpAltIcon} />
      <SidebarRow title={"Show more"} Icon={KeyboardArrowDownIcon} />
      <hr />
    </div>
  );
};
