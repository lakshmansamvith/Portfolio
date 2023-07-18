import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";

import timelineElements from './TimelineData'
import '../css/timeline.css'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function TimeLine() {
  let workIconStyles = { background: "#EDB458" };
  let schoolIconStyles = { background: "#3E92CC", color: '#fff' };

  return (
    <section id = "Timeline">
    <div className="timeline">
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement 
              key={element.key}
              date={element.date} 
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              
            <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.link}
                  target='_blank'
              rel="noreferrer"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
    </section>
    
  );
}
