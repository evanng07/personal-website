import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import MobileContent from "../MobileContent/MobileContent";
import DesktopContent from "../DesktopContent/DesktopContent";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 900);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Set to true for mobile view

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 900;
      setIsMobileView(isMobile);
      if (!isMobile) {
        setIsSidebarOpen(true); // Automatically open sidebar in desktop view
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isMobileView && isSidebarOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileView, isSidebarOpen]);

  return (
    <div className={`page ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        {isMobileView ? (
          <MobileContent />
        ) : (
          <>
            <span className="tags top-tags">&lt;body&gt;</span>
            <DesktopContent />
            <span className="tags bottom-tags">
              &lt;/body&gt;
              <br />
              <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
