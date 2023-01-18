import React from 'react'
import { Routes, Route } from "react-router-dom"
import Nav from './Nav'
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
      <Nav />
      <div className="container">
        {/* <LocationForm /> */}
        <ConferenceForm />
        {/* <AttendeesList attendees={props.attendees} /> */}
      </div>
    </>

  );
}

export default App;
