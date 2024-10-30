import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ title = 'Set your title' }) {
  return (
    <section className="top-nav">
      <div>
        <div id="title">{title}</div>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <ul className="menu">
        <Link to="/">Home</Link>
        <Link to="/business">Business</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/health">Health</Link>
        <Link to="/science">Science</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/technology">Technology</Link>
      </ul>
    </section>
  )
}