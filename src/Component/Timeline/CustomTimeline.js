import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './CustomTimeline.css';
import { Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
// import WorkIcon from '@mui/icons-material/Work';

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

      <CustomTimelineItem title='Name' text={resumeData.name} />
      <CustomTimelineItem title='Phone' text={resumeData.phone} />
      <CustomTimelineItem title='Email' text={resumeData.email} />
      <CustomTimelineItem title='Location' text={resumeData.location} />

      {Object.keys(resumeData.socials).map((item) => {
        return (
          <CustomTimelineItem
            key={item}
            title={item}
            text={resumeData.socials[item].text}
            link={resumeData.socials[item].link}
          />
        );
      })}
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

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSep />
      <TimelineContent className='timeline_content'>
        {link ? (
          <Typography className='timelineItem_text'>
            <span>{title}: </span>{' '}
            <a href={link} target='_blank' rel='noreferrer'>
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className='timelineItem_text'>
            {' '}
            <span>{title}: </span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

export default CustomTimeline;
