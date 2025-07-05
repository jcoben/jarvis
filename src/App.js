import React from 'react';
import Login from './Login';
import Home from './Home'
import RequestRide from './RequestRide'
import Schedule from './Schedule'
import Subscriptions from './Subscriptions'
import RideHistory from './RideHistory'
import Help from './Help'
import Survey from './Survey'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <title>Jarvis Home</title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/request" element={<RequestRide />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/history" element={<RideHistory />} />
          <Route path="/help" element={<Help/>} />
          <Route path="/survey" element={<Survey/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
