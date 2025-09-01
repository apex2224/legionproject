import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <main className="container">
      <section className="skills-section">
        <h1 className="skills-title">Skills & Technologies</h1>
        
        <p className="skills-description">
          Here's a comprehensive overview of my technical expertise and the tools I use in my development workflow.
        </p>
        
        <div className="skills-container">
          {/* Main Tech Stack Highlight */}
          <div className="skill-category main-tech-stack">
            <h2 className="skill-category-title">Main Tech Stack</h2>
            <p className="main-tech-description">
              I specialize in <span className="highlight-text">NextJs</span> framework with{' '}
              <span className="highlight-text">TailwindCSS</span> CSS as a styling library. For the database, 
              I use <span className="highlight-text">Postgres</span> deployed on <span className="highlight-text">NeonDB</span> with{' '}
              <span className="highlight-text">Drizzle</span> as an ORM. For database management, I use <span className="highlight-text">DataGrip</span>.
            </p>
            <p className="main-tech-description">
              At last, but not least, I use <span className="highlight-text">Cursor IDE</span> for creating awesome projects.{' '}
              <span className="heart-icon">❤️</span>
            </p>
          </div>
          
          {/* Languages */}
          <div className="skill-category">
            <h2 className="skill-category-title">Languages</h2>
            <div className="skill-list">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">HTML</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">NodeJs</div>
              <div className="skill-item">SQL</div>
              <div className="skill-item">Postgres</div>
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">SVG Animation</div>
            </div>
          </div>
          
          {/* Frameworks */}
          <div className="skill-category">
            <h2 className="skill-category-title">Frameworks</h2>
            <div className="skill-list">
              <div className="skill-item">React</div>
              <div className="skill-item">NextJs</div>
              <div className="skill-item">LiquidJs</div>
              <div className="skill-item">ExpressJs</div>
              <div className="skill-item">TailwindCSS</div>
              <div className="skill-item">TankStack Query</div>
              <div className="skill-item">Motion.dev</div>
              <div className="skill-item">GSAP</div>
              <div className="skill-item">React Email</div>
              <div className="skill-item">BetterAuth</div>
            </div>
          </div>
          
          {/* Tools */}
          <div className="skill-category">
            <h2 className="skill-category-title">Tools</h2>
            <div className="skill-list">
              <div className="skill-item">Drizzle</div>
              <div className="skill-item">Prisma</div>
              <div className="skill-item">NeonDB</div>
            </div>
          </div>
          
          {/* Platforms */}
          <div className="skill-category">
            <h2 className="skill-category-title">Platforms</h2>
            <div className="skill-list">
              <div className="skill-item">Github</div>
              <div className="skill-item">Netlify</div>
              <div className="skill-item">Vercel</div>
              <div className="skill-item">Ubuntu</div>
              <div className="skill-item">Cloudflare</div>
            </div>
          </div>
          
          {/* Softwares */}
          <div className="skill-category">
            <h2 className="skill-category-title">Softwares</h2>
            <div className="skill-list">
              <div className="skill-item">Cursor</div>
              <div className="skill-item">DataGrip</div>
              <div className="skill-item">Postman</div>
              <div className="skill-item">Figma</div>
              <div className="skill-item">Photoshop</div>
              <div className="skill-item">Tally</div>
              <div className="skill-item">Microsoft Office</div>
              <div className="skill-item">Docker</div>
            </div>
          </div>
          
          {/* Dev Ops */}
          <div className="skill-category">
            <h2 className="skill-category-title">Dev Ops</h2>
            <div className="skill-list">
              <div className="skill-item">TRPC</div>
              <div className="skill-item">Github Actions(CI/CD)</div>
              <div className="skill-item">Authentication (OAuth, JWT)</div>
            </div>
          </div>
        </div>
        
        {/* Secret Message - outside of the main container */}
        <div className="secret-message">
          Few more ... but secret hehehe :3
        </div>
      </section>
    </main>
  );
};

export default Skills;