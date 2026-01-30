import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import "./editor.css";
import { CiSaveDown2, CiShare1 } from "react-icons/ci";
import { HiArrowLeft } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

export const Editor = () => {
  const project = useLocation().state?.project;
  const nav = useNavigate();
  const [title, setTitle] = useState("Untitled Document");
  const [tags, setTags] = useState(project?.tags || []);
  const [collaborators, setCollaborators] = useState(project?.collaborators || []);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start writing your document...",
      }),
    ],
    content: "",
  });

  useEffect(() => {
    if (project) {
      setTitle(project.title || "Untitled Document");
      editor?.commands.setContent(project.content || "");
    } 
  }, [project, editor]);

  if (!editor) {
    return null;
  }
  
  const getContent = () => {
    updateProject();
  };


  const updateProject = () => {
    api.put('/project/update/'+project._id, {
      title: title,
      content: editor.getHTML(),
      tags:tags,
      collaborators:collaborators
    }).then((resp) => {
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="editor-page">
      {/* HEADER */}
      <div className="editor-header">
        <button className="btn-back" onClick={() => nav(-1)}>
          <HiArrowLeft />
        </button>
        <input className="editor-title" value={title} onChange={e=>setTitle(e.target.value)} />
        <div className="editor-actions">
          <button className="btn-secondary">
            <CiShare1 />
            Share
          </button>
          <button className="btn-primary" onClick={getContent}>
            <CiSaveDown2 />
            Save
          </button>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="toolbar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "active" : ""}
        >
          Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "active" : ""}
        >
          Italic
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          List
        </button>
          <button onClick={() => editor.chain().focus().undo().run()}>Undo</button>
          <button onClick={() => editor.chain().focus().redo().run()}>Redo</button>

      </div>

      {/* EDITOR */}
      <div className="editor-container">
        <EditorContent editor={editor}  />
      </div>
    </div>
  );
};
