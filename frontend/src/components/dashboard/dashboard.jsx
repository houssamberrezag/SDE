import "./dashboard.css";
import { LeftSidebar } from "./leftSidebar/leftSidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import { ProjectsContext } from "./ProjectsContext";
import { IoIosNotificationsOutline } from "react-icons/io";

export const Dashboard = () => {
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const userId = localStorage.getItem("userId");

  const [projects, setProjects] = useState([]);

  const refreshProjects = async () => {
    if (!userId) return;
    try {
      const resp = await api.get(`/project/user/${userId}`);
      setProjects(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refreshProjects();
  }, [userId]);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header-section">
        <div className="dashboard-title">
          <h1>S.D.E</h1>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search documents, collaborators, activities..."
          />
        </div>

        <div className="user-info">
          <div className="notification">
            <IoIosNotificationsOutline />
          </div>
          <div className="user-name">
            <span className="name">{userName}</span>
            <span className="email">{userEmail}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content-section">
        <LeftSidebar />

        <ProjectsContext.Provider value={{ projects, refreshProjects }}>
          <Outlet />
        </ProjectsContext.Provider>
      </div>
    </div>
  );
};
