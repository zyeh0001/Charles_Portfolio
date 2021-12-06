import { Typography } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import ProfilePhoto from '../../assets/images/charles.png';
import CustomTimeline, { CustomTimelineSep } from '../Timeline/CustomTimeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import resumeData from '../../utils/resumeData';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomButton from '../Button/CustomButton';
import DownloadIcon from '@mui/icons-material/Download';

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

const Porfile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'> {resumeData.name} </Typography>
        <Typography className='title'> {resumeData.title} </Typography>
      </div>
      <div className='profile_img'>
        <img className='img' src={ProfilePhoto} alt='charles'></img>
      </div>
      <div className='profile_info'>
        <CustomTimeline icon={<PersonOutlineIcon />}>
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
        </CustomTimeline>

        <div className='button_container'>
          <CustomButton
            text='Download Cv'
            icon={<DownloadIcon />}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Porfile;
