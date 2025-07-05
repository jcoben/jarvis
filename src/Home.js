import React from 'react'
import './Home.css'
import NavBar from './NavBar';

export default function Home() {
  return (
    <>
      <div className='mainContainer'>
        <NavBar titleString="Welcome to Jarvis Automotive Services!" selectedTab="0" />
        <div className="mapContainer"></div>
        <p>Imagine a better map. Asset downloaded from <a href="http://www.freepik.com">freepik</a>.</p>
      </div >
    </>
  )
}
