import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

const resumeData = {
  name: 'Charles Yeh',
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
  about:
    'I’m an information technology master graduate from Monash University, with over 6 years of experience in operations, web development, project management, data analysis skills. Besides with a previous 1 year of experience as an FAE engineer. I was trained to provide efficient solutions for customers requirements and developed strong interpersonal and verbal communication skills. \n\nI have excellent problem-solving skills and transform complex analysis into clear and practical steps, providing meaningful and relevant insights. I am also adept at designing, developing, analyzing, and reviewing reports, metrics, and data sets to support performance results. \n\nI would like to apply my knowledge about Information technology to help companies to improve their performance. My specialty includes knowledge about  React js, AWS services, Javascript, CSS, HTML, Java, Python, Android studio, SQL, R, and Tableau. I am also a go-getter and quick learner that can help me face challenges during my work. I am now seeking to gain full-time employment as a web developer or any IT-related opportunities in different industries.',
  work: [
    {
      title: 'Freelance Web Developer',
      date: 'Sep2021 – PRESENT',
      description:
        'Ø Establish and maintain a multi-lingual website Taiwan-Japan exchange platform.',
    },
    {
      title: 'Greata International Corp-FAE ENGINEER',
      date: 'Apr2019 - Oct 2019',
      description:
        'Ø Work with Delta Electronics to support the Government intelligent street lamp system in Taoyuan city.\n Ø Assist customers to determined product requirements and provide pre-sales and after-sales technical support including problem solving and training.\nØ Examine failure Microchip IC testing using C programming and oscilloscope',
    },
    {
      title: 'Workforce Development Agency (WDA)-TEACHING ASSISTANT',
      date: 'Aug 2018 - Oct 2020',
      description:
        'Ø Assist students in solving IT related problems for various certificates, including different computer C-level Technician certificates.',
    },
  ],
  education: [
    {
      name: 'Monash University',
      date: 'Mar2020 - Dec2021 - Melbourne, Australia',
      major: 'Master of Information Technology',
    },
    {
      name: 'National Dong Hwa University',
      date: 'Sep2014 - June2018 - Taipei, Taiwan',
      major: 'Bachelor of Computer Science',
    },
    {
      name: 'California State University of Monterey Bay',
      date: 'Aug2017 - Jan2018 - California, USA',
      major: 'ExchangeStudent',
      award:
        'Ø Awarded International exchange scholarship from Ministry of Education, Taiwan',
    },
  ],
};

export default resumeData;
