import React from 'react'
import { useNavigate } from 'react-router-dom'
import './DropDownMenu.css'

export default function DropDownMenu() {
  const navigate = useNavigate()

  const onSubscriptClick = () => {
    navigate('/subscriptions')
  }

  const onAddressClick = () => {
    navigate('/home')
  }

  const onMessagesClick = () => {
    navigate('/home')
  }

  const onHelpClick = () => {
    navigate('/help')
  }

  const onContactClick = () => {
    navigate('/home')
  }

  return (
    <div className='dropdown-menu'>
        <ul>
          <li>
            <button className='dropButton' onClick={onSubscriptClick} >See My Subscription</button>
          </li>
          <li>
            <button className='dropButton' onClick={onAddressClick} >Addresses</button>
          </li>
          <li>
            <button className='dropButton' onClick={onMessagesClick} >My Messages</button>
          </li>
          <li>
            <button className='dropButton' onClick={onHelpClick} >Help</button>
          </li>
          <li>
            <button className='dropButton' onClick={onContactClick} >Contact Jarvis</button>
          </li>
        </ul>
    </div>
  )
}
