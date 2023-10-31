import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import "@site/src/css/timeline.css";

export default function Timeline() {
  const timelineElements = [
    {
      title: "Realismus",
      date: "2020-01-01",
      popis: "Lorem ipsum",
      autori: ["karel", "vojta"],
      url: "realismus",
    },
    {
      title: "Romantismus",
      date: "2020-01-01",
      popis: "Lorem ipsum",
      autori: ["karel", "vojta"],
      url: "romantismus",
    },
    {
      title: "Klasicismus",
      date: "2020-01-01",
      popis: "Lorem ipsum",
      autori: ["karel", "vojta"],
      url: "klacisismus",
    }
  ];

  const handleClick = (url) => {
    // Open the URL in a new window or tab
    window.open(url, "_self");
  };

  return (
    <VerticalTimeline>
      {timelineElements.map((element, index) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={element.date}
          iconStyle={{ background: "rgb(206, 66, 19)", color: "#fff" }}
          icon={<AutoStoriesIcon />}
          iconOnClick={() => handleClick(element.url)}
          iconClassName="iconHover"
        >
          <h1 style={{ color: "rgb(206, 66, 19)" }}>{element.title}</h1>
          <p style={{ color: "black" }}>{element.popis}</p>
          <p style={{ color: "gray" }}>
            autoři:{" "}
            {element.autori.map((autor, index) => (
              <span>
                {autor}
                {index !== element.autori.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
