import { useState, useEffect, React } from 'react'
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';
import './Subscription.css'

const LOCAL_STORAGE_KEY = 'jarvis.subscription'

export default function Subscriptions() {
  const [subscription, setSubscription] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
    const storedSubscription = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedSubscription) setSubscription(storedSubscription)
  }, [])

  useEffect(() => {
    if (subscription === '') return
    console.log("writing " + subscription)
    localStorage.setItem(LOCAL_STORAGE_KEY, subscription)
  }, [subscription])

  const onOKClick = () => {
    navigate('/home');
  }

  const onChangeSubscription = (event) => {
    setSubscription(event.target.value)
  }

  return (
    <div className='mainContainer' onChange={onChangeSubscription}>
      <NavBar titleString="Subscription"/>
      <div className='contentContainer'>
        <p>This is your subscription level. Increase or decrease the number of scheduled and unscheduled rides per month here.</p>
        <div className='radioEntry'>
          <input type="radio" id="html" name="sub" value="bronze" checked={subscription === "bronze"} />
          <label for="bronze">Bronze: 5 scheduled and 2 unscheduled rides per week.</label>
        </div>

        <div className='radioEntry'>
          <input type="radio" id="html" name="sub" value="silver" checked={subscription === "silver"} />
          <label for="silver">Silver: 10 scheduled and 4 unscheduled rides per week.</label>
        </div>

        <div className='radioEntry'>
          <input type="radio" id="javascript" name="sub" value="gold" checked={subscription === "gold"} />
          <label for="gold">Gold: 20 scheduled and 8 unscheduled rides per week.</label>
        </div>

        <Popup trigger=
          {<button className='subButton'>Save</button>}
          modal nested className='modal'>
          <p>Thank you.</p>
          <button className='subButton'onClick={onOKClick}>OK</button>
        </Popup>
      </div>
    </div>
  )
}
