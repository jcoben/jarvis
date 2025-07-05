import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";import React, { useState, useRef, useEffect } from 'react'
import ScheduleList from './ScheduleList'
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import { v4 as uuidv4 } from 'uuid'
import NavBar from './NavBar'
import './Schedule.css'

const LOCAL_STORAGE_KEY = 'jarvis.schedule'

export default function Schedule() {
  const [schedules, setSchedules] = useState([
    { id: 1, pickup: '123 Apple Street', dropoff: '456 Banana Road', vehicle: 'car', daily: true, weekly: false, monthly: false },
    { id: 2, pickup: '456 Banana Road', dropoff: '123 Apple Street', vehicle: 'car', daily: true, weekly: false, monthly: false }
  ])
  const schedulePickupRef = useRef()
  const scheduleDropoffRef = useRef()
  const scheduleVehicleRef = useRef()
  const scheduleDailyRef = useRef()
  const scheduleWeeklyRef = useRef()
  const scheduleMonthlyRef = useRef()

  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [daily, setDaily] = useState(false)
  const [weekly, setWeekly] = useState(false)
  const [monthly, setMonthly] = useState(false)
  const [fieldsValid, setFieldsValid] = useState(false)

  const locales = {
    "en-US": require('date-fns/locale/en-US')
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })

  function handleAddEvent() {
    setEvents([...events, newEvent])
  }

  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [events, setEvents] = useState()

  const isPickupValid = () => {
    return pickup !== ''
  }

  const isDropoffValid = () => {
    return dropoff !== ''
  }

  const handleFieldsChange = () => {
    setPickup(schedulePickupRef.current.value)
    setDropoff(scheduleDropoffRef.current.value)
    setVehicle(scheduleVehicleRef.current.value)

    setDaily(scheduleDailyRef.current.checked)
    setWeekly(scheduleWeeklyRef.current.checked)
    setMonthly(scheduleMonthlyRef.current.value)

    setFieldsValid(isPickupValid() && isDropoffValid())
  }

  useEffect(() => {
    const storedSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedSchedules) setSchedules(storedSchedules)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(schedules))
  }, [schedules])

  function handleAddSchedule(e) {
    console.log(scheduleVehicleRef.current.value)
    setSchedules(prevSchedules => {
      return [...prevSchedules, { id: uuidv4(), pickup: pickup, dropoff: dropoff, vehicle: vehicle, daily: daily, weekly: weekly, monthly: monthly }]
    })
    schedulePickupRef.current.value = ""
    scheduleDropoffRef.current.value = ""
    scheduleVehicleRef.current.value = "car"
    scheduleDailyRef.current.checked = true
    scheduleWeeklyRef.current.checked = false
    scheduleMonthlyRef.current.checked = false
    setPickup("")
    setDropoff("")

    setFieldsValid(false)
  }

  function deleteSchedule(id) {
    const newSchedules = schedules.filter(schedule => schedule.id !== id)
    setSchedules(newSchedules)
  }

  return (
    <div className='mainContainer'>
      <NavBar titleString="Regularly Scheduled Rides" selectedTab="2" />
      <div className='contentContainer'>
        <div className='scheduleContainer'>
          <div className='listContainer'>
            <div className="scheduleRow">
              <div className="scheduleLine">
                <div className="scheduleItem">
                  <label for="pickup">Pickup Address: </label>
                  <input className={isPickupValid() ? 'scheduleInput required' : 'scheduleInput error'} name="pickup" ref={schedulePickupRef} type="text" onChange={handleFieldsChange} />
                </div>

                <div className="scheduleItem">
                  <label for="dropoff">Dropoff Address: </label>
                  <input className={isDropoffValid() ? 'scheduleInput required' : 'scheduleInput error'} name="dropoff" ref={scheduleDropoffRef} type="text" onChange={handleFieldsChange} />
                </div>
              </div>
              <div className="scheduleLine">
                <div className="scheduleItem">
                  <label for="vehilce">Vehicle Type: </label>

                  <select name="vehicle" id="vehicle" ref={scheduleVehicleRef} onChange={handleFieldsChange} >
                    <option value="car">Car</option>
                    <option value="truck">Truck</option>
                    <option value="van">Van</option>
                    <option value="shuttle">Shuttle</option>
                  </select>
                </div >

                <div className="scheduleItem">
                  <label for="daily">Daily</label>
                  <input type="radio" id="daily" name="interval" ref={scheduleDailyRef} onChange={handleFieldsChange} defaultChecked />
                </div >

                <div className="scheduleItem">
                  <label for="weekly">Weekly</label>
                  <input type="radio" id="weekly" name="interval" ref={scheduleWeeklyRef} onChange={handleFieldsChange} />
                </div >

                <div className="scheduleItem">
                  <label for="monthly">Monthly</label>
                  <input type="radio" id="monthly" name="interval" ref={scheduleMonthlyRef} onChange={handleFieldsChange} />
                </div>

                <button onClick={handleAddSchedule} className="scheduleNowButton submitButton" disabled={!fieldsValid}>Add New</button>
              </div>
            </div >
            <ScheduleList schedules={schedules} deleteSchedule={deleteSchedule} />
          </div>
          <div className="calendarContainer">
            <Calendar localizer={localizer} events={events}
            startAccessor="start" endAccessor="end" />
          </div>
        </div>
      </div>
    </div >
  )
}
