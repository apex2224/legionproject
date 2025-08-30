import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Radio.css';

import homeIcon from './Icons/user-circle-duotone-svgrepo-com.svg';
import skillsIcon from './Icons/barbell-duotone-svgrepo-com.svg';
import WorkIcon from './Icons/graduation-cap-duotone-svgrepo-com.svg';
import ArtsIcon from './Icons/pencil-circle-duotone-svgrepo-com.svg';
import BlogsIcon from './Icons/books-duotone-svgrepo-com.svg';

const Radio = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="radio-wrapper">
      <section className="radio-section">
        <label title="Home" htmlFor="home" className="radio-label" onClick={() => handleNavigation('/')}>
          <input id="home" name="page" type="radio" defaultChecked />
          <img src={homeIcon} alt="Home" className="radio-icon" />
          <span className="tooltip">Home</span>
        </label>
        <label title="Work" htmlFor="work" className="radio-label" onClick={() => handleNavigation('/work')}>
          <input id="work" name="page" type="radio" />
          <img src={WorkIcon} alt="Work" className="radio-icon" />
          <span className="tooltip">Work</span>
        </label>
        <label title="Arts" htmlFor="arts" className="radio-label" onClick={() => handleNavigation('/arts')}>
          <input id="arts" name="page" type="radio" />
          <img src={ArtsIcon} alt="Arts" className="radio-icon" />
          <span className="tooltip">Arts</span>
        </label>
        <label title="Skills" htmlFor="skills" className="radio-label" onClick={() => handleNavigation('/radio')}>
          <input id="skills" name="page" type="radio" />
          <img src={skillsIcon} alt="Skills" className="radio-icon" />
          <span className="tooltip">Skills</span>
        </label>
        <label title="Blogs" htmlFor="blogs" className="radio-label" onClick={() => handleNavigation('/blogs')}>
          <input id="blogs" name="page" type="radio" />
          <img src={BlogsIcon} alt="Blogs" className="radio-icon" />
          <span className="tooltip">Blogs</span>
        </label>
      </section>
    </div>
  );
};

export default Radio;