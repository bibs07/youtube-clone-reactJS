import React from "react";
import "../styles/SidebarRow.css";

export const SidebarRow = ({ Icon, title, selected }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <p>{title}</p>
    </div>
  );
};
