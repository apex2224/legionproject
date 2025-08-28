import React from 'react'
import './Page.css'
import DiscordIcon from './Icons/discord-logo-duotone-svgrepo-com.svg'
import TwitterIcon from './Icons/twitter-logo-duotone-svgrepo-com.svg'
import TelegramIcon from './Icons/telegram-logo-duotone-svgrepo-com.svg'
import YoutubeIcon from './Icons/youtube-logo-duotone-svgrepo-com.svg'
import DocsIcon from './Icons/brain-duotone-svgrepo-com.svg'
import BookmarkIcon from './Icons/linkedin-logo-duotone-svgrepo-com.svg'
import EmailIcon from './Icons/globe-hemisphere-east-duotone-svgrepo-com.svg'


const colors = ['#ebedf0', '#29412dff', '#3b483fff', '#171a17ff', '#000000ff'];

const generateContributions = () => {
  const contributions = [];
  for (let week = 0; week < 53; week++) {
    for (let day = 0; day < 7; day++) {
      contributions.push({
        week,
        day,
        level: Math.floor(Math.random() * 5)
      });
    }
  }
  return contributions;
};

const Page = () => {
  const contributions = generateContributions();

  return (
    <div className="Father">
      {/* Intro Section */}
      <div className="Son">
        <h1 className="hey">Hey It's Me</h1>
        <div className="azaki-container">
          <h1 className="Azaki">AZAKI</h1>
          <h1 className="azaki">/@azaki</h1>
        </div>

        <p className="para">
          Yup! I'm a Design Engineer. Big deal, right? But wait—there's more!
          I'm not just any developer,<br />I'm a Full Stack Developer.
          And if that wasn't enough, guess what?<br />maybe Freelancer? Oh yeah,
          I've got that badge too!<br />I love both Design & Development.
          so, That means I can create beautiful and functional websites.
          I'm always looking for new opportunities to learn and grow.
        </p>
      </div>

      {/* Buttons */}
      <div className="btns">
        <button className="hire-btn">
          <img src={BookmarkIcon} alt="Bookmark" className="btn-icon" />
          Available for Hire
        </button>
        <span className="or-text">or</span>
        <button className="email-btn">
          <img src={EmailIcon} alt="Email" className="btn-icon" />
          Email Me
        </button>
      </div>

      {/* Flow Diagram */}
      <div className="flow">
        <button className="flow-btn">
          <img src={DiscordIcon} alt="Discord" className="btn-icon" />
          Discord
        </button>
        <button className="flow-btn">
          <img src={TwitterIcon} alt="Twitter" className="btn-icon" />
          Twitter
        </button>
        <button className="flow-btn">
          <img src={TelegramIcon} alt="Telegram" className="btn-icon" />
          Telegram
        </button>
        <button className="flow-btn">
          <img src={YoutubeIcon} alt="Youtube" className="btn-icon" />
          Youtube
        </button>
        <button className="flow-btn">
          <img src={DocsIcon} alt="Docs" className="btn-icon" />
          Docs
        </button>
      </div>

      {/* Heatmap Section */}
      <div className="heatmap-container">
          <svg width={53 * 13} height={7 * 13}>
            {contributions.map((c, i) => (
              <rect
                key={i}
                x={c.week * 13}
                y={c.day * 13}
                width={11}
                height={11}
                rx={2}
                ry={2}
                fill={colors[c.level]}
                className="heatmap-cell"
              >
                <title>
                  Week {c.week + 1}, Day {c.day + 1} → Level {c.level}
                </title>
              </rect>
            ))}
          </svg>
        </div>

 
      </div>
   
  )
}

export default Page
