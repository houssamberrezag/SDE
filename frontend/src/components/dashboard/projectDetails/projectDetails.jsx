import { CiCalendarDate } from 'react-icons/ci';
import ProjectCard from '../mainContent/projectCard/projectCard';
import './projectDetails.css';
import { IoPersonAddOutline, IoPersonOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiFolder, HiOutlineUserAdd, HiTrash } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import DOMPurify from "dompurify";
import { ImFileEmpty } from "react-icons/im";

export const ProjectDetails = () => {
    const project = useLocation().state?.project;
    const nav = useNavigate();
    const [cleanHTML, setCleanHTML] = useState("");
    useEffect(() => {
        if (!project) {
            nav('/dashboard/projects');
        }
        if (project?.content) {
            const sanitizedHTML = DOMPurify.sanitize(project.content);
            setCleanHTML(sanitizedHTML);
        }
        else{
            setCleanHTML("<div class='no-content'><p>No content available</p></div>");
        }
    }, [project, nav]);

    return (
        <div className="project-details">
            <div className="project-header">
                <h2>{project?.title || "Untitled Project"}</h2>
                <p>{project?.description || ""}</p>
            </div>
            <div className="project-info">
                <div className="project-display">

                    <div className='project_demo' dangerouslySetInnerHTML={{__html: cleanHTML}}>

                    </div>

                </div>
                <div className='project-users'>
                    <div className='project-date'>
                        <h3>Date</h3>
                        <p>
                        <CiCalendarDate />
                            12/12/2023</p>
                    </div>
                    <div className='project-owner'>
                        <h3>Owner</h3>
                        <p> <IoPersonAddOutline />
                            User 1</p> 
                    </div>
                    <div className='project-collaborators'>
                        <h3>Collaborators</h3>
                        <div>
                            <p> <IoPersonOutline />
                                User 1</p>
                            <p> <IoPersonOutline />
                                User 2</p>
                            <p> <IoPersonOutline />
                                User 3</p>
                        </div>
                    </div>
                    <div className='project-tags'>
                        {
                            project?.tags?.map((tag, index) => (
                                <div key={index} className='tag'>
                                    <span>{tag}</span>
                                </div>
                            ))
                        }

                    </div>
                    <div className='project-actions'>
                        <button onClick={() => nav('/editor', { state: { project } })} className='btn-edit'>
                        <HiFolder />
                        Edit Project</button>
                        <button className='btn-primary'>
                            <HiOutlineUserAdd />
                            Add Collaborator</button>
                        <button className='btn-delete'>
                            <HiTrash />
                            Delete Project</button>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};
