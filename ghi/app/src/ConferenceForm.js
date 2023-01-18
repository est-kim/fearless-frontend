import React, { useEffect, useState } from 'react';

function ConferenceForm () {
    const [name, setName] = useState('')
    const [starts, setStartDate] = useState('')
    const [ends, setEndDate] = useState('')
    const [description, setDescription] = useState('')
    const [max_presentations, setPresentations] = useState('')
    const [max_attendees, setAttendees] = useState('')
    const [location, setLocation] = useState('')
    const [locations, setLocations] = useState([])

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value)
    }
    const handleStartDateChange = (event) => {
        const value = event.target.value;
        setStartDate(value)
    }
    const handleEndDateChange = (event) => {
        const value = event.target.value;
        setEndDate(value)
    }
    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value)
    }
    const handlePresentationChange = (event) => {
        const value = event.target.value;
        setPresentations(value)
    }
    const handleAttendeeChange = (event) => {
        const value = event.target.value;
        setAttendees(value)
    }
    const handleLocationChange = (event) => {
        const value = event.target.value;
        setLocation(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}
        data.name = name;
        data.starts = starts;
        data.ends = ends;
        data.description = description;
        data.max_presentations = max_presentations;
        data.max_attendees = max_attendees;
        data.location = location;

        console.log(data)

        const conferenceUrl = 'http://localhost:8000/api/conferences/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(conferenceUrl, fetchConfig)
        if (response.ok) {
            const newConference = await response.json()
            console.log(newConference)
            setName('')
            setStartDate('')
            setEndDate('')
            setDescription('')
            setPresentations('')
            setAttendees('')
            setLocation('')
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/locations/';

        const response = await fetch(url)

        if (response.ok) {

            const data = await response.json()
            setLocations(data.locations)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new conference</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleStartDateChange} value={starts} placeholder="mm/dd/yyyy" required type="date" name="starts" id="starts" className="form-control"/>
                <label htmlFor="starts">Start Date</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleEndDateChange} value={ends} placeholder="mm/dd/yyyy" required type="date" name="ends" id="ends" className="form-control"/>
                <label htmlFor="ends">End Date</label>
              </div>
              <label htmlFor="description">Description</label>
              <div className="form mb-3">
                <textarea onChange={handleDescriptionChange} value={description} required name="description" rows="5" cols="20" id="description" spellCheck="true" className="form-control"></textarea>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePresentationChange} value={max_presentations} placeholder="Maximum Presentations" required type="number" name="max_presentations" id="max_presentations" className="form-control"/>
                <label htmlFor="max_presentations">Maximum presentations</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleAttendeeChange} value={max_attendees} placeholder="Maximum Attendees" required type="number" name="max_attendees" id="max_attendees" className="form-control"/>
                <label htmlFor="max_attendees">Maximum attendees</label>
              </div>
              <div className="mb-3">
                <select onChange={handleLocationChange} value={location} required name="location" id="location" className="form-select">
                    <option value="">Choose a location</option>
                    {locations.map(location => {
                        return (
                            <option key={location.href} value={location.id}>
                                {location.name}
                            </option>
                        );
                    })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default ConferenceForm;
