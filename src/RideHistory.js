import React from 'react'
import './Ride.css'
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';

export default function RideHistory() {
  const id = Math.random().toString(9).substr(2, 7)
  const navigate = useNavigate()
  const myHistory = [
    { id: 1, pickup: '123 Apple Street', dropoff: '456 Banana Road', vehicle: 'car', date: 'September 1, 2024 07:14:00' },
    { id: 1, pickup: '456 Banana Road', dropoff: '123 Apple Street', vehicle: 'car', date: 'September 1, 2024 12:03:00' },
    { id: 1, pickup: '123 Apple Street', dropoff: '1515 George Mason Avenue', vehicle: 'truck', date: 'September 5, 2024 08:34:00' }
  ]

  const onCancelClick = () => {
    navigate('/home');
  }

  const onOKClick = () => {
    navigate('/home');
  }

  return (
    <div className='mainContainer'>
      <NavBar titleString="My Jarvis History" selectedTab="3" />
      <div className='contentContainer'>
        {
          myHistory.map(e => {
            return (
              <div className='historyContainer'>
                <p><label className="label historyLabel">From:</label>"{e.pickup}" <label className="label historyLabel">To:</label> "{e.dropoff}" <label className="label historyLabel">Vehicle:</label> {e.vehicle} <label className="label historyLabel">Date:</label>{e.date.toLocaleString('en-US', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}</p>
                <Popup trigger=
                  {<button className='requestButton submitButton'>Report Issue</button>}
                  modal nested className='modal'>
                  <p><label className="label historyLabel">From:</label> {e.pickup}</p>
                  <p><label className="label historyLabel">To:</label> {e.dropoff}</p>
                  <p><label className="label historyLabel">Vehicle:</label> {e.vehicle}</p>
                  <p><label className="label historyLabel">Date:</label> {e.date.toLocaleString(
                    'en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                  </p>
                  <label for="message">Please tell us about the issue:</label>
                  <textarea name="message" type="text" />
                  <div className='submitContainer'>
                    <button className='cancelButton requestButton' onClick={onCancelClick} >Cancel</button>
                    <Popup trigger=
                      {<button className='requestButton submitButton' >Submit</button>}
                      modal nested className='modal'>
                      <p>Thank you for reporting this issue.</p>
                      <p>Your issue is #{id}</p>
                      <p>A representative will contact you within 24 hours.</p>
                      <button className='requestButton' onClick={onOKClick}>OK</button>
                    </Popup>
                  </div>
                </Popup>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
