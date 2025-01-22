import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject, faTasks } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Sprint Execution",
  "Agile Metrics",
  "Team Collaboration",
  "Scrum Mastery",
  "Incremental Delivery",
];

const labelsSecond = [
  "Vision Alignment",
  "Backlog Prioritization",
  "Roadmap Planning",
  "Stakeholder Value",
  "Customer Focus",
];

const labelsThird = [
  "Strategic Planning",
  "Risk Management",
  "Resource Allocation",
  "Process Optimization",
  "Cross-team Coordination",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faDiagramProject} size="3x" />
            <h3>Program Management</h3>
            <p>
              I have extensive experience in program management, specializing in
              strategic planning, stakeholder management, and project execution.
              My expertise in lifecycle management, risk assessment, and
              resource allocation ensures successful outcomes with efficiency
              and quality.
            </p>
            <div className="flex-chips">
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faTasks} size="3x" />
            <h3>Scrum Framework</h3>
            <p>
              I have deep expertise in the Scrum framework, guiding Agile teams
              to deliver high-value products through iterative development. I
              specialize in sprint planning, backlog management, and Agile
              ceremonies to drive efficiency, collaboration, and business
              alignment.
            </p>
            <div className="flex-chips">
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faLightbulb} size="3x" />
            <h3>Product Ownership Strategy</h3>
            <p>
              I specialize in product ownership strategy, ensuring
              customer-centric solutions through effective backlog management,
              roadmap planning, and stakeholder collaboration. I focus on
              prioritization and delivering value through iterative development.
            </p>
            <div className="flex-chips">
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
