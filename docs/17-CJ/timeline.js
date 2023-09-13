import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import React from 'react';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Timeline({children, color}) {
  const timelineElements = [
    {

    }
  ]
  
    return (
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<AutoStoriesIcon />}
        >
        <h1>Romantismus</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<AutoStoriesIcon />}
        >
        <h1>Romantismus</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<AutoStoriesIcon />}
        >
        <h1>Romantismus</h1>
        </VerticalTimelineElement>
    </VerticalTimeline>
  );
}