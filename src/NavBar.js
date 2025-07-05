import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
import DropDownMenu from './DropDownMenu';

export default function Home({ titleString, selectedTab }) {
  const navigate = useNavigate()
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const onHomeClick = () => {
    navigate('/home')
  }

  const onRequestClick = () => {
    navigate('/request')
  }

  const onScheduleClick = () => {
    navigate('/schedule')
  }

  const onHistoryClick = () => {
    navigate('/history')
  }

  return (
    <div className='navContainer'>
      <div className='welcomeContainer'>
        <div className='navHomeButton' onClick={onHomeClick}></div>
        <p>{titleString}</p>
        <div className='accountContainer'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} >
          {isDropdownVisible && <DropDownMenu />}
        </div>
      </div>
      <div className='toolBar'>
        <button className={selectedTab === "1" ? 'toolBarButton selectedButton submitButton rideButton' : 'toolBarButton rideButton'} onClick={onRequestClick} >Request a Ride</button>
        <button className={selectedTab === "2" ? 'toolBarButton selectedButton submitButton scheduleButton' : 'toolBarButton scheduleButton'} onClick={onScheduleClick} >View Scheduled Rides</button>
        <button className={selectedTab === "3" ? 'toolBarButton selectedButton submitButton historyButton' : 'toolBarButton historyButton'} onClick={onHistoryClick} >Ride History</button>
      </div>
    </div>
  )
}