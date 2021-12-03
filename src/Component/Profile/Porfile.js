import { Typography } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import ProfilePhoto from '../../assets/images/charles.png';
import CustomTimeline from '../Timeline/CustomTimeline';
import resumeData from '../../utils/resumeData';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomButton from '../Button/CustomButton';
import DownloadIcon from '@mui/icons-material/Download';

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
        <CustomTimeline icon={<PersonOutlineIcon />} />

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
