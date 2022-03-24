import { Waypoint } from "react-waypoint";
import "../styles/Projects.css";
import img from "../assets/fit-find-fe.png";

const Projects = ({ setPageLocation }) => {
  return (
    <>
      <div id="projects">
        <h3>Projects</h3>
        <Waypoint onEnter={() => setPageLocation("projects")} />
        <div className="listOfProjects">
          <div className="project">
            <a href="https://fit-find-fe.vercel.app/" target="_blank"><img src={img} alt="" srcset="" /></a>
            <div className="projecttext">
            <p className="title">Fit Find</p>
            <p>
              Fit Find is a Full-stack project that connects users to the health
              and fitness professionals around them allowing users to see posts,
              leave reviews and buy products
            </p>
            <a className="link" href="https://github.com/adam-belahouane/Fit-Find-FE" target="_blank">Backend code</a>
            <a className="link" href="https://github.com/adam-belahouane/Fit-Find-BE" target="_blank">Frontend code</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
