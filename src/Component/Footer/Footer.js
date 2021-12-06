import React from 'react';
import { Typography } from '@material-ui/core';
import './Footer.css';
import '../../utils/resumeData';
import resumeData from '../../utils/resumeData';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{resumeData.name}</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright'>
          Design and developed by
          <a
            href='https://github.com/zyeh0001'
            target='_blank'
            rel='noreferrer'
          >
            Charles Yeh.
          </a>
          <br></br>
          Clone the idea from
          <a
            href='https://themeforest.net/user/tavonline'
            target='_blank'
            rel='noreferrer'
          >
            Tavonline.
          </a>
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
