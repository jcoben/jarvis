import React from 'react'
import './index.css'
import NavBar from './NavBar'
import './Survey.css'

export default function Home() {

  return (
    <>
      <div className='mainContainer'>
        <NavBar titleString="SWE645 Survey" selectedTab="0"/>
        <form>
            <div className="surveyLine">
                <div className="surveyItem ">
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"/>
                </div>
                <div className="surveyItem ">
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname"/>
                </div>
            </div>
            <div className="surveyLine">
                <div className="surveyItem ">
                    <label for="saddress">Street Address:</label>
                    <input type="text" id="saddress" name="saddress"/>
                </div>
                <div className="surveyItem ">
                    <label for="city">City:</label>
                    <input type="text" id="city" name="city"/>
                </div>
            </div>
            <div className="surveyLine">
                <div className="surveyItem ">
                    <label for="state">State:</label>
                    <input type="text" id="state" name="state"/>
                </div>
                <div className="surveyItem ">
                    <label for="zip">Zip:</label>
                    <input type="text" id="zip" name="zip"/>
                </div>
            </div>
            <div className="surveyLine">
                <div className="surveyItem ">
                    <label for="tele">Telephone:</label>
                    <input type="text" id="tele" name="tele"/>
                </div>
                <div className="surveyItem ">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email"/>
                </div>
            </div>
            <div className="surveyLine">
                <div className="surveyItem ">
                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date"/>
                </div>
            </div>
            
            <label className="surveyHeading">What did you like most about campus?</label>
            <div className="checkItem">
                <label for="students">
                    <input type="checkbox" name="students" />
                    Students
                </label>
            </div>
            <div className="checkItem">
                <label for="location">
                    <input type="checkbox" name="location" />
                    Location
                </label>
            </div>
            <div className="checkItem">
                <label for="atmos">
                    <input type="checkbox" name="atmos" />
                    Atmosphere
                </label>
            </div>
            <div className="checkItem">
                <label for="atmos">
                    <input type="checkbox" name="atmos" />
                    Atmosphere
                </label>
            </div>
            <div className="checkItem">
                <label for="dorms">
                    <input type="checkbox" name="dorms" />
                    Dorms
                </label>
            </div>
            <div className="checkItem">
                <label for="sports">
                    <input type="checkbox" name="sports" />
                    Sports
                </label>
            </div>

            <label className="surveyHeading">How did you become interested in the university?</label>
            <div className="surveyRadios">
                <div className="surveyRadio">
                    <input type="radio" id="friends" name="interest" defaultChecked />
                    <label for="friends">Friends</label>
                </div >
                <div className="surveyRadio">
                    <input type="radio" id="television" name="interest" />
                    <label for="television">Television</label>
                </div >
                <div className="surveyRadio">
                    <input type="radio" id="internet" name="interest" />
                    <label for="internet">Internet</label>
                </div>
                <div className="surveyRadio">
                    <input type="radio" id="other" name="interest" />
                    <label for="other">Other</label>
                </div>
            </div>

            <label for="recommend" className="surveyHeading">How likely are you to recommend this university?: </label>
            <select name="recommend" id="recommend" >
                <option value="high">Very Likely</option>
                <option value="medium">Likely</option>
                <option value="low">Unlikely</option>
            </select>

            <label for="raffle" className="surveyHeading">Raffle:</label>
            <input type="text" id="raffle" name="raffle"/>

            <label for="comments" className="surveyHeading">Additional Comments:</label>
            <textarea id="comments" name="comments"/>

            <button className='cancelButton requestButton' >Cancel</button>
            <button className='requestButton submitButton' >Submit</button>
        </form>
      </div >
    </>
  )
}