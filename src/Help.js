import React from 'react'
import './index.css'
import NavBar from './NavBar';

export default function Home() {

  return (
    <>
      <div className='mainContainer'>
        <NavBar titleString="Jarvis Help" selectedTab="0"/>
        <div className='contentContainer'>
          <p>This interface is used to schedule rides by autonomous vehicle from our fleet.
            <br/>Four vehicle types are available: car, truck, van, and shuttle.</p>
            <hr className="separator"/>
          <h2 className="label helpLabel">Screens</h2>
          <p>These screens are available from the home menu.</p>
          <a href="#request">Request a Ride</a>
          <a href="#schedule">View Scheduled Rides</a>
          <a href="#history">Ride History</a>
          <hr className="smallSeparator"/>
          <h3  className="label helpLabel" id="request"> - Request a Ride</h3>
          <p>On this screen, a ride can be requested from a pickup location to a destination.
            <br/>The ride can be scheduled immediately or in the near future.
            <br/>Clicking the 'Search...' button will validate the address entered and suggest corrections.
            <br/>Clicking the 'My Location' button will populate the field with the current GPS location.</p>
          <hr className="smallSeparator"/>
          <h3  className="label helpLabel" id="schedule"> - View Scheduled Rides</h3>
          <p>At this screen, regularly scheduled rides can be viewed, deleted, or a new regularly scheduled ride can be added.</p>
          <hr className="smallSeparator"/>
          <h3 className="label helpLabel" id="history"> - Ride History</h3>
          <p>Here a record of past rides can be viewed.
            <br/>Any issues with rides can be reported by clicking 'Report Issue.</p>
            <hr className="separator"/>
          <h2 className="label helpLabel">User Profile</h2>
          <p>Hovering the mouse over the user icon will open a drop down menu.</p>
          <a href="#subscribe">See My Subscription</a>
          <a href="#addresses">Addresses</a>
          <a href="#messages">My Messages</a>
          <a href="#help">Help</a>
          <a href="#contact">Contact Jarvis</a>
          <hr className="smallSeparator"/>
          <h3 className="label helpLabel" id="subscribe"> - See My Subscription</h3>
          <p>This menu allows the subscription level to be changed.
            <br/>Three subscription levels are available and each comes with a different number of regularly scheduled and unscheduled rides per month.</p>
            <hr className="smallSeparator"/>
          <h3 className="label helpLabel" id="addresses"> - Addresses</h3>
          <p>Stored addresses can be used to quickly and easily schedule and request rides.</p>
          <hr className="smallSeparator"/>
          <h3 className="label helpLabel" id="messages"> - My Messages</h3>
          <p>Messages from Jarvis will appear here.</p>
          <hr className="smallSeparator"/>
          <h3 className="label helpLabel" id="help"> - Help</h3>
          <p>Displays this screen.</p>
          <hr className="smallSeparator"/>
          <h3 className="label helpLabel" id="contact"> - Contact Jarvis</h3>
          <p>Here a message can be sent to help technicians.</p>
          <hr className="smallSeparator"/>
        </div>
      </div >
    </>
  )
}
