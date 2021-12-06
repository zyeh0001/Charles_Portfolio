import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './CustomTimeline.css';
import { Typography } from '@material-ui/core';

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className='timeline'>
      {/* Item Header */}
      <TimelineItem className='timeline_firstItem'>
        <TimelineSeparator>
          <TimelineDot className='timeline_header_dot'>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className='timeline_header'>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Remaining items */}
      {children}
    </Timeline>
  );
};

export const CustomTimelineSep = () => {
  return (
    <TimelineSeparator className='seperator_padding'>
      <TimelineDot varient={'outlined'} className='timeline_dot' />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimeline;
