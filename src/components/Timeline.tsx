import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Mar 2023 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Project Manager - Program Management Office
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Optum, India</h4>
            <p>
              Overseeing strategic initiatives, project planning, and
              stakeholder management in healthcare technology.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2020 - Mar 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Scrum Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">
              UnitedHealth Group
            </h4>
            <p>
              Led Agile teams to deliver high-quality products through iterative
              development and Agile methodologies.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2014 - Jun 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lead Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Snap-on Business Solutions
            </h4>
            <p>
              Provided strategic consulting on business operations and
              technology-driven solutions.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2012 - Oct 2013"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Strategy Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              P.M.T Electronics
            </h4>
            <p>
              Developed strategic plans to optimize business performance and
              market positioning.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2007 - Apr 2009"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Technology Associate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sapient</h4>
            <p>
              Focused on software development, system integration, and
              delivering client-focused technology solutions.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
