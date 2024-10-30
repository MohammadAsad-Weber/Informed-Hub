import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import NavBar from './Components/NavBar';
import NewsArea from './Components/NewsArea';

import { API_KEY } from './Components/ApiKey.js'; // Create a new JS File with a Variable which contains your API Key, and import it here!

export default function App() {
  const apiKey = API_KEY;
  return (
    <>
      <BrowserRouter>
        <NavBar title='Informed Hub' />
        <Routes>
          <Route exact path='/' element={<NewsArea key='general' category='general' apiKey={apiKey} />} />
          <Route exact path='/business' element={<NewsArea key='business' category={'business'} apiKey={apiKey} />} />
          <Route exact path='/entertainment' element={<NewsArea key='entertainment' category={'entertainment'} apiKey={apiKey} />} />
          <Route exact path='/health' element={<NewsArea key='health' category={'health'} apiKey={apiKey} />} />
          <Route exact path='/science' element={<NewsArea key='science' category={'science'} apiKey={apiKey} />} />
          <Route exact path='/sports' element={<NewsArea key='sports' category={'sports'} apiKey={apiKey} />} />
          <Route exact path='/technology' element={<NewsArea key='technology' category={'technology'} apiKey={apiKey} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}