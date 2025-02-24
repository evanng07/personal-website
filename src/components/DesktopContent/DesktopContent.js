import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";

const DesktopContent = () => {
  return (
    <div className="desktop-content">
      <span className="tags top-tags">&lt;body&gt;</span>
      <Outlet />
      <span className="tags bottom-tags">
        &lt;/body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>
    </div>
  );
};

export default DesktopContent; 