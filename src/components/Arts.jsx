import React from 'react'
import './Arts.css'

const Arts = () => {
  // Sample art data - you can replace these with your actual art links
  const artsData = [
    {
      id: 1,
      title: "Digital Art 1",
      type: "image",
      url: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Art+1",
      description: "Description of the artwork"
    },
    {
      id: 2,
      title: "Digital Art 2",
      type: "twitter",
      url: "https://x.com/legionsdev/status/1941839027453534602",
      description: "Description of the artwork"
    },
    {
      id: 3,
      title: "Digital Art 3",
      type: "image",
      url: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Art+3",
      description: "Description of the artwork"
    },
    {
      id: 4,
      title: "Digital Art 4",
      type: "image",
      url: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Art+4",
      description: "Description of the artwork"
    },
    {
      id: 5,
      title: "Digital Art 5",
      type: "image",
      url: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Art+5",
      description: "Description of the artwork"
    },
    {
      id: 6,
      title: "Digital Art 6",
      type: "image",
      url: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Art+6",
      description: "Description of the artwork"
    }
  ];

  const renderMedia = (art) => {
    if (art.type === "video") {
      return (
        <video 
          className="art-media" 
          controls 
          controlsList="nodownload"
          disablePictureInPicture
        >
          <source src={art.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (art.type === "twitter") {
      // Extract tweet ID from URL
      const tweetId = art.url.split('/').pop();
      return (
        <iframe
          className="art-media"
          src={`https://platform.twitter.com/embed/Tweet.html?id=${tweetId}&theme=dark`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={art.title}
        />
      );
    } else {
      return <img src={art.url} alt={art.title} className="art-media" />;
    }
  };

  return (
    <div className="arts-container">
      <h1 className="arts-title">Arts</h1>
      <div className="arts-content">
        <div className="arts-grid">
          {artsData.map((art) => (
            <div key={art.id} className="art-card">
              <div className="art-media-container">
                {renderMedia(art)}
              </div>
              <div className="art-info">
                <h3 className="art-title">{art.title}</h3>
                <p className="art-description">{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Arts