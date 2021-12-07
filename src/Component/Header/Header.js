import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/CustomButton';
import './Header.css';

const Header = withRouter((props) => {
  const pathName = props.location.pathname;
  console.log(pathName);
  return (
    <Navbar expand='lg' sticky='top' className='header container_shadow'>
      <Nav.Link as={NavLink} to='/' className='header_nav_link'>
        <Navbar.Brand className='header_home'>
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle className='header_toggle' />
      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName === '/' ? 'header_link_active' : 'header_link'}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName === '/portfolio' ? 'header_link_active' : 'header_link'
            }
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/contact'
            className={
              pathName === '/contact' ? 'header_link_active' : 'header_link'
            }
          >
            Contact
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.socials).map((social) => {
            return (
              <a
                key={social}
                href={resumeData.socials[social].link}
                target='_blank'
                rel='noreferrer'
              >
                {resumeData.socials[social].icon}
              </a>
            );
          })}
          <CustomButton text={'Hire Me'} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Header;
