
import React from 'react';
import PropTypes from 'prop-types';
import './Work.css';
const WORK_EXPERIENCE = [
  {
    id: 'hidden-fullstack-2024',
    company: '[Hidden]',
    role: 'Fullstack Developer',
    period: 'Jun 2024 - now',
    location: 'Europe, Remote',
    achievements: [
      'Redesigned and optimized the entire dashboard, store layouts, and checkout page, enhancing user experience and performance',
      'Optimized checkout performance, reducing load time by 20% leading to a 15% increase in conversions',
      'Built reusable React components and email templates, reducing development time by 25%',
      'Built custom editable templates using .liquid templating language so users can customize their storefront without any coding knowledge'
    ]
  },
  {
    id: 'trycompai-design-2025',
    company: 'TrycompAI',
    role: 'Design Engineer',
    period: 'Jun 2025',
    location: 'USA, Remote',
    achievements: [
      'Developed Blogs, Blog page design via PayloadCMS, implemented SEO friendly URLs, and optimized for performance and SEO.',
      'Transformed static bento cards into interactive elements with animations to enhance user engagement, while maintaining performance and SEO optimization.'
    ]
  },
  {
    id: 'profound-design-2025',
    company: 'Profound',
    role: 'Design Engineer',
    period: 'May 2025',
    location: 'USA, Remote',
    achievements: [
      'Animating the static bento card to make it more interactive and engaging. while keeping Optimized for performance and SEO.'
    ]
  },
  {
    id: 'mentra-frontend-2024',
    company: 'Mentra.gg',
    role: 'Frontend Developer',
    period: 'Feb - Jun 2024',
    location: 'Europe, Remote',
    achievements: [
      'Took full responsibility for developing a website from scratch.',
      'Ensuring a clean and responsive frontend with smooth animations',
      'Setup and maintained a CI/CD pipeline using GitHub Actions to deploy and update the website',
      'Developed Dashboard, Checkout, Storefront, and Admin Panel from scratch. Optimized for performance and SEO.',
      'Handling Custom Domain on stores via nextjs middleware routing'
    ]
  },
  {
    id: 'freelance-fullstack-2023',
    company: 'Freelance',
    role: 'Fullstack Developer',
    period: '2023 - now',
    location: 'India, Remote',
    achievements: [
      'Designed and developed responsive websites from scratch',
      'Ensuring clean UI/UX and smooth animations',
      'Managed end-to-end project execution, from wireframing and prototyping to deployment and maintenance',
      'Deployed and maintained websites using Vercel, Cloudflare, and AWS (Ubuntu)'
    ]
  }
];

// Job Card Component for better separation of concerns
const JobCard = ({ job }) => {
  if (!job) {
    return null;
  }

  const { company, role, period, location, achievements = [] } = job;

  return (
    <article className="job-card" role="article" aria-labelledby={`job-${job.id}`}>
      <header className="job-header">
        <div className="job-info">
          <h3 id={`job-${job.id}`} className="company-name">
            {company || 'Company Name Not Available'}
          </h3>
          <h4 className="job-role">{role || 'Role Not Specified'}</h4>
          <div className="job-meta">
            <span className="job-period" aria-label="Employment period">
              {period || 'Period Not Specified'}
            </span>
            <span className="job-location" aria-label="Work location">
              {location || 'Location Not Specified'}
            </span>
          </div>
        </div>
      </header>
      
      {achievements.length > 0 && (
        <div className="job-achievements">
          <ul className="achievements-list" role="list">
            {achievements.map((achievement, achIndex) => (
              <li key={`${job.id}-achievement-${achIndex}`} className="achievement">
                <span className="achievement-bullet" aria-hidden="true">•</span>
                <p className="achievement-text">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    company: PropTypes.string,
    role: PropTypes.string,
    period: PropTypes.string,
    location: PropTypes.string,
    achievements: PropTypes.arrayOf(PropTypes.string)
  })
};

const Work = ({ workExperience = WORK_EXPERIENCE }) => {
  // Handle empty or invalid data
  if (!Array.isArray(workExperience) || workExperience.length === 0) {
    return (
      <main className="work-container">
        <section className="work-header">
          <h1 className="work-title">Work</h1>
          <p className="work-subtitle">No work experience available at the moment.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="work-container" role="main">
      <header className="work-header">
        <h1 className="work-title">Work</h1>
        <p className="work-subtitle">Here is my work experience!</p>
      </header>

      <section className="work-experience" aria-label="Work experience timeline">
        {workExperience.map((job) => {
          // Skip invalid job entries
          if (!job || typeof job !== 'object') {
            console.warn('Invalid job entry found:', job);
            return null;
          }

          return (
            <JobCard 
              key={job.id || `job-${Math.random()}`} 
              job={job} 
            />
          );
        })}
      </section>
    </main>
  );
};

Work.propTypes = {
  workExperience: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      company: PropTypes.string,
      role: PropTypes.string,
      period: PropTypes.string,
      location: PropTypes.string,
      achievements: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default Work;