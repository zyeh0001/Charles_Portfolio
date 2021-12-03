import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

const resumeData = {
  name: 'Charles',
  title: 'Web Developer',
  phone: '(61)423-105-719',
  email: 'charlesyehtw@gmail.com',
  location: 'Melbourne',

  socials: {
    Facebook: {
      link: 'https://www.facebook.com/charlesyehtw/',
      text: 'Charles Yeh',
      icon: <FacebookIcon />,
    },
    Likedin: {
      link: 'https://www.linkedin.com/in/charles-yeh-1b5950202/',
      text: 'Charles_Yeh',
      icon: <LinkedInIcon />,
    },
    Github: {
      link: 'https://github.com/zyeh0001',
      text: 'MyGitHub',
      icon: <GitHubIcon />,
    },
    Instagram: {
      link: 'https://www.instagram.com/charles.gaga_/',
      text: 'charles.gaga_',
      icon: <InstagramIcon />,
    },
  },
};

export default resumeData;
