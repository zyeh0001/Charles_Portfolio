import React from 'react';
import './Resume.css';
import { Grid, Paper, Typography } from '@material-ui/core';
import '../../utils/resumeData';
import resumeData from '../../utils/resumeData';
import CustomTimeline from '../../Component/Timeline/CustomTimeline';
import WorkIcon from '@mui/icons-material/Work';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import { CustomTimelineSep } from '../../Component/Timeline/CustomTimeline';
import SchoolIcon from '@mui/icons-material/School';
import TimelineDot from '@mui/lab/TimelineDot';

function Resume() {
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45 pt_30'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography varient='body2' className='aboutme_text'>
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and experience */}
      <Grid container className='section pb_45 pt_30 greybg'>
        <Grid item className='section_title'>
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='resumeTimeline '>
            {/* working history */}
            <Grid item sm={12} md={6}>
              <CustomTimeline icon={<WorkIcon />} title={'Work Experience'}>
                {resumeData.work.map((experience) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSep />
                      <TimelineContent>
                        <Typography className='timeline_title'>
                          {experience.title}
                        </Typography>
                        <Typography variant='caption' className='timeline_date'>
                          {experience.date}
                        </Typography>
                        <Typography
                          variant='body2'
                          className='timeline_description'
                        >
                          {experience.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>
            {/* education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline icon={<SchoolIcon />} title={'Education'}>
                {resumeData.education.map((school) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSep />
                      <TimelineContent>
                        <Typography className='timeline_title'>
                          {school.name}
                        </Typography>
                        <Typography variant='h6' className='school_major'>
                          {school.major}
                        </Typography>
                        <Typography variant='caption' className='timeline_date'>
                          {school.date}
                        </Typography>
                        <Typography
                          variant='body2'
                          className='timeline_description'
                        >
                          {school.award}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      {/* <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {resumeData.services.map((service) => {
              return (<Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  
                </div>
              </Grid>);
            })}
          </Grid>
        </Grid>
      </Grid> */}

      {/* Skills */}
      <Grid
        container
        // spacing={3}

        className='section pb_45 pb_45 p_30'
      >
        <Grid item className='section_title mb_30 section'>
          <span></span>
          <h6 className='section_title_text'>Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={'space-between'} spacing={3}>
            {resumeData.skills.map((skill) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={0} className='skill'>
                    <Typography variant='h6' className='skill_title'>
                      {skill.title}
                    </Typography>
                    {skill.description.map((elements) => {
                      return (
                        <Typography
                          variant='body2'
                          className='skill_description'
                        >
                          <TimelineDot
                            variant='outlined'
                            className='timeline_dot'
                          />
                          {elements}
                        </Typography>
                      );
                    })}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
