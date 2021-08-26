import React, { useState } from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";

//Importing icons from material UI
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchIcon from "@material-ui/icons/Search";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuRoundedIcon />
        <YouTubeIcon className="header__logo" />
        <p>Premium</p>
      </div>
      <div className="header__center">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button onClick={(e) => e.preventDefault()}>
          <Link to={`/search/${search}`}>
            <SearchIcon />
          </Link>
        </button>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__rightIcon" />
        <AppsIcon className="header__rightIcon" />
        <NotificationsIcon className="header__rightIcon" />
        <AccountCircleIcon className="header__rightIcon" />
      </div>
    </div>
  );
};
