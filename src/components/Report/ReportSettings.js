import React from 'react';
import { useState, useEffect } from 'react';
import RouteDropdown from '../Dropdowns/RouteDropdown';

export default function ReportSettings({ GenerateMapReport }) {
  //Get list of routes
  const [routes, setRoutes] = useState([]); //Route details
  const [routeIDs, setRouteIDs] = useState([]); //Route IDs
  useEffect(() => {
    fetch('https://api-proxy.auckland-cer.cloud.edu.au/AT/gtfs/v3/routes', {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': '7ddfd9ea87aa41dc9fe4efb9a5318dd5',
      }
    })
    .then(response => response.json())
    .then(response => {
      let tempRoutes = [];
      let tempRouteIDs = [];
      for (var route of response.data) {
        tempRoutes[route.id] = route.attributes;
        tempRouteIDs.push(route.id);
      }
      setRoutes(tempRoutes);
      setRouteIDs(tempRouteIDs);
    })
    .catch(error => console.log(error))
  }, []);
  

  //Report settings
  const [route, setRoute] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [minSpeed, setMinSpeed] = useState(null);

  const PassValuesUp = () => {
    GenerateMapReport(route, startDate, endDate, startTime, endTime, minSpeed);
  }

  return (
    <>
      <h2 className='text-center'>Report Settings</h2>
        <h5>Route</h5>
        <RouteDropdown dropdownSelectHandle={ eventKey => setRoute(eventKey) } routes={ routes } routeIDs={ routeIDs } />
        <br />

        <div className="reports-container row">
          <div className='col-md-6'>
            <h5>Start Date</h5>
            <input type="date" onInput={ e => setStartDate(e.target.value) }/>
          </div>
          <div className='col-md-6'>
            <h5>End Date</h5>
            <input type="date" onInput={ e => setEndDate(e.target.value) }/>
          </div>

          <div className='col-md-6'>
            <h5>Start Time</h5>
            <input type="time" onInput={ e => setStartTime(e.target.value) }/>
          </div>
          <div className='col-md-6'>
            <h5>End Time</h5>
            <input type="time" onInput={ e => setEndTime(e.target.value) }/>
          </div>
        </div>

        <br />
        <h5>Minimum Speed Threshold</h5>
        <input type="number" defaultValue="0" onInput={ e => setMinSpeed(e.target.value) }/>
      
        <br />
        <br />
        <h5>Generate Report</h5>
        <button type="button" class="btn btn-primary" onClick={ PassValuesUp }>Generate</button>
    </>
  );
};
