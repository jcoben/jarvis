import { React, useState, useRef } from 'react'
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom'
import './Ride.css'
import 'reactjs-popup/dist/index.css'
import NavBar from './NavBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RequestRide() {
  const navigate = useNavigate()

  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [usingNow, setUsingNow] = useState(false)
  const [date, setDate] = useState(new Date())
  const [timeValid, setTimeValid] = useState(false)
  const [fieldsNotValid, setFieldsNotValid] = useState(true)

  const startRef = useRef()
  const endRef = useRef()
  const vehicleRef = useRef()
  const pickupRef = useRef()
  const nowRef = useRef()

  const isSourceValid = () => {
    return source !== ''
  }

  const isDestinationValid = () => {
    return destination !== ''
  }

  const handleFieldsChange = (aDate) => {
    console.log("Start:     " + startRef.current.value)
    console.log("End:       " + endRef.current.value)
    console.log("Vehicle:   " + vehicleRef.current.value)
    console.log("Now:       " + nowRef.current.checked)

    setDate(aDate)

    setUsingNow(nowRef.current.checked)
    var now = new Date()
    var timeValid = nowRef.current.checked || now.getTime() < aDate.getTime()
    console.log("timeValid:       " + timeValid)
    setTimeValid(timeValid)

    var my_source = startRef.current.value
    setSource(my_source)
    var my_dest = endRef.current.value
    setDestination(my_dest)

    setFieldsNotValid(!(my_dest !== '' && my_source !== '' && timeValid))
  }

  const dateIsInPast = (date) => new Date() < date;

  const onCancelClick = () => {
    navigate('/home');
  }

  const onOKClick = () => {
    navigate('/home');
  }

  return (
    <div className='mainContainer'>
      <NavBar titleString="Request a Ride" selectedTab="1" />
      <div className='contentContainer'>
        <div className='inputContainer'>
          <p className='label inputLabel'>Start address:</p>
          <input
            className={isSourceValid() ? 'required inputBox' : 'error inputBox'}
            ref={startRef}
            onChange={() => handleFieldsChange(date)}
          />
          <button className='requestButton' >Search...</button>
          <button className='requestButton' >My Location</button>
        </div>
        
        <div className={isSourceValid() ? "barGaugeContainer" : "noBarGauge" }>
          <p className="label">Wait time:</p> 
          <div className={isSourceValid() ? "barGauge" : "noBarGauge" }>
            <div class="left startLeft"></div>
            <div class="right startRight"></div>
            <div class="barGaugeText">5 mins</div>
          </div>
        </div>

        <div className='inputContainer'>
          <p className='label inputLabel'>Destination:</p>
          <input
            className={isDestinationValid() ? 'required inputBox' : 'error inputBox'}
            ref={endRef}
            onChange={() => handleFieldsChange(date)}
          />
          <button className='requestButton' >Search...</button>
        </div>

        <div className={isDestinationValid() ? 'barGaugeContainer' : "noBarGauge"}>
          <p className="label">Wait time:</p>
          <div className={isDestinationValid() ? "barGauge" : "noBarGauge"}>
            <div class="left destLeft"></div>
            <div class="right destRight"></div>
            <div class="barGaugeText">25 mins</div>
          </div>
        </div>

        <div className='inputContainer'>
          <label for="vehilce">Vehicle Type:</label>

          <select
            name="vehicle"
            ref={vehicleRef}
            id="vehicle"
            onChange={() => handleFieldsChange(date)}>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
            <option value="shuttle">Shuttle</option>
          </select>
        </div>

        <div className='inputContainer'>
          <p className='label inputLabel'>Pickup time:</p>
          <div className="checkItem">
            <label for="now">
              <input type="checkbox" ref={nowRef} name="now" onChange={() => handleFieldsChange(date)} className={timeValid ? 'required' : 'error'} />
              Now
            </label>
          </div>
          <p className="label">-OR-</p>
          <DatePicker
            ref={pickupRef}
            disabled={usingNow}
            showTimeSelect
            filterDate={dateIsInPast}
            selected={date}
            onChange={(date) => handleFieldsChange(date)}
            dateFormat="MMMM d, yyyy h:mmaa"
            className={timeValid ? "required datePicker" : "error datePicker"}
          />
        </div>

        <div className='submitContainer'>
          <button className='cancelButton requestButton' onClick={onCancelClick} >Cancel</button>
          <Popup trigger=
            {<button className='requestButton submitButton requestSubmitButton' disabled={fieldsNotValid}>Submit</button>}
            modal nested className='modal'>
            <p>Thank you, your ride is scheduled.</p>
            <button className='requestButton' onClick={onOKClick}>OK</button>
          </Popup>
        </div>
      </div>
    </div>
  )
}
