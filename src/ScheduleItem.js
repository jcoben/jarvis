import { React, useRef } from 'react'
import Popup from 'reactjs-popup';
import './Schedule.css'

export default function ScheduleItem({ schedule, deleteSchedule }) {
  const popupRef = useRef()

  function handleDelete() {
    deleteSchedule(schedule.id)
  }

  const closePopup = () => {
    popupRef.current.close()
  }

  return (
    <div className="scheduleRow">
      <div className="scheduleLine">
        <div className="scheduleItem">
          <label for="pickup">Pickup Address: </label>
          <p name="pickup" id="pickup">{schedule.pickup}</p>
        </div>

        <div className="scheduleItem">
          <label for="dropoff">Dropoff Address: </label>
          <p name="dropoff" id="dropoff">{schedule.dropoff}</p>
        </div>
      </div>
      <div className="scheduleLine">
        <div className="scheduleItem">
          <label for="vehilce">Vehicle Type: </label>
          <p name="vehicle" id="vehicle">{schedule.vehicle}</p>
        </div >

        <div className="scheduleItem">
          <label for="daily">Daily</label>
          <input type="radio" id="daily" name={schedule.id} defaultChecked={schedule.daily} disabled />
        </div >

        <div className="scheduleItem">
          <label for="weekly">Weekly</label>
          <input type="radio" id="weekly" name={schedule.id} defaultChecked={schedule.weekly} disabled />
        </div >

        <div className="scheduleItem">
          <label for="monthly">Monthly</label>
          <input type="radio" id="monthly" name={schedule.id} defaultChecked={schedule.monthly} disabled />
        </div >

        <Popup ref={popupRef} trigger={<button className='scheduleNowButton'>Delete</button>}
          modal nested className='modal' >
          <p>Permanently delete?</p>
          <button className='cancelButton scheduleNowButton' onClick={closePopup}>Cancel</button>
          <button className='scheduleNowButton' onClick={handleDelete}>Delete</button>
        </Popup>
      </div >
    </div >
  )
}
