import React from 'react';

export default function NewsItem({ img, headline, description, url, date, source }) {
  const randomImg = 'https://th.bing.com/th/id/OIP.srycfA_Q0J5y_ReI4thStgHaE7?w=267&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7';

  return (
    <div className="card">
      <div className="source">{source}</div>
      <img src={img ? img : randomImg} alt='' />
      <h2 className="headline">{headline.length > 70 ? headline.slice(0, 70) + '...' : headline}</h2>
      <p className="description">{description.length > 150 ? description.slice(0, 150) + `...` : description}</p>
      <p className="time">{new Date(date).toGMTString()}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"><button>Read More</button></a>
    </div>
  )
}