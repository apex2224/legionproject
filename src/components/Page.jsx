import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Page.css'
import DiscordIcon from './Icons/discord-logo-duotone-svgrepo-com.svg'
import TwitterIcon from './Icons/twitter-logo-duotone-svgrepo-com.svg'
import TelegramIcon from './Icons/telegram-logo-duotone-svgrepo-com.svg'
import YoutubeIcon from './Icons/youtube-logo-duotone-svgrepo-com.svg'
import DocsIcon from './Icons/brain-duotone-svgrepo-com.svg'
import BookmarkIcon from './Icons/linkedin-logo-duotone-svgrepo-com.svg'
import EmailIcon from './Icons/globe-hemisphere-east-duotone-svgrepo-com.svg'
import monkeyImg from './Icons/monkey.png'
import mitosisPng from './Icons/mitosis.png'
import overtakePng from './Icons/overtake.png'
import fhensPng from './Icons/fhenix.png' 
import XocietyPng from './Icons/xociety.png' 

const SOCIAL_LINKS = [
  { icon: TwitterIcon, name: 'Twitter', url: 'https://x.com/nuzzio' },
  { icon: TelegramIcon, name: 'Telegram', url: 'https://t.me/airdropsdetectives' },
  { icon: DiscordIcon, name: 'Discord', url: 'https://discord.gg/B8uexGhywn' },
  { icon: YoutubeIcon, name: 'Youtube', url: 'https://www.youtube.com/@nuzzio' },
  { icon: DocsIcon, name: 'Docs', url: 'https://defizo.xyz/' }
];

const Page = () => {
  const navigate = useNavigate();

  return (
    <main className="container">
      {/* Hero Section */}
      <section className="hero">
        <img src={monkeyImg} alt="Monkey" className="hero-monkey" />
        <p className="greeting">Hey It's Me</p>
        <div className="name-container">
          <h1 className="name-primary">Nuzzio</h1>
          <span className="name-handle" onClick={() => navigate('/@nuzzio')}>/@nuzzio</span>
        </div>
        <p className="bio">
          Yup! I'm a <span className="highlight">Design Engineer</span>. Big deal, right? But wait — there's more! I'm not just any developer,<br />
          I'm a <span className="highlight">Full Stack Developer</span>. And if that wasn't enough, guess what?<br />
          maybe <span className="highlight">Freelancer</span>? Oh yeah, I've got that badge too!
        </p>
        <p className="bio-2">
          I love both <span className="highlight">Design & Development</span>. so, That means I can <br />create beautiful and functional websites. I'm always looking <br />for new opportunities to learn and grow.
        </p>
      </section>

      {/* Action Buttons */}
      <section className="actions">
        <button className="btn btn-primary">
          <img src={BookmarkIcon} alt="" className="btn-icon" />
          Available for Hire
        </button>
        <span className="divider">or</span>
        <button className="btn btn-secondary">
          <img src={EmailIcon} alt="" className="btn-icon" />
          Email Me
        </button>
      </section>

     

      {/* Social Links */}
      <section className="social-section">
        <p className="bio3">You can check these links if you wish to</p>
        <div className="social-grid">
          {SOCIAL_LINKS.map((link, index) => (
            <button key={index} className="social-btn" onClick={() => window.open(link.url, '_blank')}>
              <img src={link.icon} alt="" className="btn-icon" />
              {link.name}
            </button>
          ))}
        </div>
      </section>

      <div className='projects-div'>
        <span className='projects-text'>Live Projects</span>
        <div className='projects-container'>
            <div className='project-card'>
              <div className='corner-br'></div>
              <div className='corner-bl'></div>
              <img src={overtakePng} alt="overtake" />
              <div className='project-info'>
                <h3>OVERTAKE</h3>
                <p>Web3 gaming platform with NFT integration</p>
              </div>
            </div>
            <div className='project-card'>
              <div className='corner-br'></div>
              <div className='corner-bl'></div>
              <img src={XocietyPng} alt="xociety" />
              <div className='project-info'>
                <h3>XOCIETY</h3>
                <p>Social media analytics dashboard</p>
              </div>
            </div>
            <div className='project-card'>
              <div className='corner-br'></div>
              <div className='corner-bl'></div>
              <img src={fhensPng} alt="fhenix" />
              <div className='project-info'>
                <h3>FHENIX</h3>
                <p>Privacy-focused messaging application</p>
              </div>
            </div>
            <div className='project-card'>
              <div className='corner-br'></div>
              <div className='corner-bl'></div>
              <img src={mitosisPng} alt="mitosis" />
              <div className='project-info'>
                <h3>MITOSIS</h3>
                <p>Decentralized finance dashboard</p>
              </div>
            </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="timeline-section">
        <p className='bio4'>Journey</p>
        <div className="timeline">
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            <div className="timeline-content">
              <p className="timeline-title">Started Coding</p>
              <p className="timeline-date">Jan 2020</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            <div className="timeline-content">
              <p className="timeline-title">First Web Project</p>
              <p className="timeline-date">Jun 2020</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            <div className="timeline-content">
              <p className="timeline-title">Full Stack Developer</p>
              <p className="timeline-date">Dec 2021</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            <div className="timeline-content">
              <p className="timeline-title">Freelance Work</p>
              <p className="timeline-date">Mar 2022</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            <div className="timeline-content">
              <p className="timeline-title">Design Engineer</p>
              <p className="timeline-date">Present</p>
            </div>
          </div>
          <div className="timeline-item" onClick={() => navigate('/work')} style={{cursor: 'pointer'}}>
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            <div className="timeline-content">
              <p className="timeline-title">Work</p>
              <p className="timeline-date">View All</p>
            </div>
          </div>
          <div className="timeline-arrow">
            <span className="arrow-text">Future Goals</span>
            <span className="arrow-icon">→</span>
          </div>

        </div>
      </section>
      <footer className="footer">
        <p className="footer-text">Made with ❤️ by Nuzzio</p>
      </footer>
    </main>

    

  
  )
}

export default Page
