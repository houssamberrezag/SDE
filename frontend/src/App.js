import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Register } from "./components/auth/register/register";
import { Login } from "./components/auth/login/login";
import { Dashboard } from "./components/dashboard/dashboard";
import { Editor } from "./components/editor/editor";
import { CreateProject } from "./components/dashboard/createProject/createProject";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="create" element={<CreateProject />} />
        </Route>
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
