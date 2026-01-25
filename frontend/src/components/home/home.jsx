import { FiArrowUpRight } from "react-icons/fi";
import "./home.css";
import { PiShootingStarThin } from "react-icons/pi";
import { HiInformationCircle } from "react-icons/hi";
/**
 * Home component - Main landing page of the Shared Document Editor application
 *
 * This component renders the home page that introduces users to a collaborative
 * document editing platform. It displays:
 * - A welcoming introduction with an inspiring image showcasing the concept of
 *   document collaboration
 * - An "About" section explaining that the platform enables teams to work together
 *   seamlessly with features including real-time editing, version control, and
 *   team communication
 * - A "Get Started" section encouraging users to create an account or log in to
 *   begin collaborating on documents
 *
 * The app is a shared document editor that allows multiple users to edit documents
 * simultaneously in real-time, with built-in version control to track changes and
 * communication tools to facilitate team collaboration.
 *
 * @component
 * @returns {JSX.Element} The home page layout with intro, about, and get-started sections
 */
export const Home = () => {
  return (
    <main className="home-container">
      <section className="intro-section">
        <div className="intro-text">
          <h2>Welcome to the Shared Document Editor</h2>
          <p>Collaborate on documents in real-time with ease.</p>
        </div>
        <div className="intro-image">
          <img
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdW1lbnQlMjBlZGl0b3J8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Document Collaboration"
          />
        </div>
      </section>
      <section id="about" className="about-section">
        <h3>
          <HiInformationCircle />
          About
        </h3>
        <span className="about-title">Collaborate Smarter, Together</span>
        <p>
          Our platform is designed to <strong>bring teams together</strong> and
          make collaboration on documents{" "}
          <strong>effortless and productive</strong>. Whether you're
          brainstorming ideas, drafting reports, or finalizing important
          content, our app ensures that
          <strong>everyone stays aligned and contributes effectively</strong>.
          Say goodbye to scattered files and miscommunication – everything your
          team needs is in one place.
        </p>
        <p>
          With{" "}
          <strong>
            real-time editing, version control, and intuitive tools
          </strong>
          , your team can work simultaneously without conflicts or confusion.
          Instantly see updates, leave comments, and track changes to keep
          projects <strong>transparent and organized</strong>. Our platform
          empowers teams to{" "}
          <strong>
            move faster, reduce errors, and maintain a clear workflow
          </strong>
          , making collaboration seamless and enjoyable.
        </p>
        <p>
          We believe that <strong>great teamwork drives great results</strong>.
          By providing a central hub for shared documents and communication, our
          app transforms how teams
          <strong>create, review, and deliver content together</strong>. From
          small projects to large-scale initiatives, our platform helps teams{" "}
          <strong>stay coordinated, informed, and productive</strong>, making
          collaboration not just easier, but smarter.
        </p>
      </section>
      <section id="getStart" className="get-started-section">
        <h3>
          <PiShootingStarThin />
          Get Started
        </h3>
        <p>
          Ready to enhance your team's collaboration? Create an account or log
          in to start working together on documents in real-time. Experience the
          power of seamless teamwork and take your projects to the next level!
        </p>
        <button className="get-started-button">
          Get Started <FiArrowUpRight />
        </button>
      </section>
    </main>
  );
};
