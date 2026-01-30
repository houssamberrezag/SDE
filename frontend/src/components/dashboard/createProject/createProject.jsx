import { useContext, useState } from "react";
import "./createProject.css";
import { CiSquarePlus } from "react-icons/ci";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import { ProjectsContext } from "../ProjectsContext";

export const CreateProject = () => {
  const { refreshProjects } = useContext(ProjectsContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const userId = localStorage.getItem("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/project/create", {
        title,
        userId,
        tags: tags.split(",").map(t => t.trim()),
      });

      await refreshProjects();
      navigate("/dashboard/projects");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-project-page">
      <h2>
        <CiSquarePlus /> Create New Project
      </h2>

      <form className="create-project-form" onSubmit={handleSubmit}>
        <label>Project Title</label>
        <input
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Tags (comma separated)</label>
        <input
          type="text"
          placeholder="marketing, UI, backend"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};
