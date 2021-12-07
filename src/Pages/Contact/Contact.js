import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import CustomButton from '../../Component/Button/CustomButton';
import resumeData from '../../utils/resumeData';
import './Contact.css';
import Map from './Map';

function Contact() {
  return (
    <Grid container spacing={6} className='section pt_45'>
      {/* Contact form */}
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <Grid className='section_title'>
              <span></span>
              <h6 className='section_title_text'>Contact Me</h6>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id='outlined-required'
                label='Name'
                name='name'
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id='outlined-required'
                name='email'
                label='Email'
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='outlined-required'
                name='message'
                label='Message'
                multiline
                rows={4}
              ></TextField>
            </Grid>
          </Grid>

          <Grid item xs={12} className='pt_30'>
            <CustomButton text='Submit'></CustomButton>
          </Grid>
        </Grid>
      </Grid>
      {/* Contact info */}
      <Grid item xs={12} lg={5}>
        <Grid container>
          <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Contact Info</h6>
          </Grid>
          <Grid container className='contact_info_container'>
            <Grid item>
              <Typography className='contact_info_item'>
                <span>Location: </span>
                {resumeData.location}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='contact_info_item'>
                <span>Address: </span>
                {resumeData.address}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='contact_info_item'>
                <span>Emial: </span>
                {resumeData.email}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='contact_info_item'>
                <span>Phone: </span>
                {resumeData.phone}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='contact_info_social_container'>
            {Object.keys(resumeData.socials).map((social) => {
              return (
                <Grid item className='contact_info_social_icon'>
                  <a
                    key={social}
                    href={resumeData.socials[social].link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {resumeData.socials[social].icon}
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Map />
      </Grid>
    </Grid>
  );
}

export default Contact;
