import './App.css';
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { DiJavascript1 } from "react-icons/di"


function App() {
  return (
    <div className="content">
      <div className='header'>
        <div className='image'>
        </div>
        <div className='header-info'>
          <h2 className='Name'>
            Pham Dinh Tuan
          </h2>
          <p className='level'>
            Developer
          </p>
          <div className='contac-wrapper'>
            <ul className='contact-list'>
              <li className='contact-item'>
                <HiMail className='contact-icon' />phamdinhtuan1912@gmail.com
              </li>
              <li className='contact-item'>
                <MdPhoneIphone className='contact-icon' />0367711566
              </li>
              <li className='contact-item'>
                <HiLocationMarker className='contact-icon' />Ho Chi Minh
              </li>
              <li className='contact-item'>
                <FaGithub className='contact-icon' />https://github.com/tuanpy2000
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className='about'>
          <h3>
            About Me
          </h3>
          <p>
            Hello. I am Tuan .I want to be a good Front-End developer.I will always try to improve my knowledge.
          </p>
          <h3>
            Objective
          </h3>
          <p>Get a lot of knowledge</p>
          <h3>
            Skill
          </h3>
          <ul className='skill-list'>
            <li className='skill-item'>
              <FaHtml5 className='skill-icon' />HTML
            </li>
            <li className='skill-item'>
              <FaCss3Alt className='skill-icon' />CSS
            </li>
            <li className='skill-item'>
              <DiJavascript1 className='skill-icon' />JavaScript
            </li>
          </ul>
        </div>


      </div>
    </div>

  );
}

export default App;
