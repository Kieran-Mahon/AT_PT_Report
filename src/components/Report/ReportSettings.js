import React from 'react';
import { useState, useEffect } from 'react';
import RouteDropdown from '../Dropdowns/RouteDropdown';
import DayDropdown from '../Dropdowns/DayDropdown';
import HourDropdown from '../Dropdowns/HourDropdown';

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
  const [day, setDay] = useState(null);
  const [hour, setHour] = useState(null);

  const OnGenerateClick = () => {
    GenerateMapReport(route, day, hour);
  }

  return (
    <>
      <h2 className='text-center'>Report Settings</h2>
        <h5>Route</h5>
        <RouteDropdown dropdownSelectHandle={ eventKey => setRoute(eventKey) } routes={ routes } routeIDs={ routeIDs } />
        <br />
        <br />

        <div className="reports-container row">
          <div className='col-md-6'>
            <h5>Day</h5>
            <DayDropdown dropdownSelectHandle={ eventKey => setDay(eventKey) }/>
          </div>
          <div className='col-md-6'>
            <h5>Hour</h5>
            <HourDropdown dropdownSelectHandle={ eventKey => setHour(eventKey) }/>
          </div>
        </div>

        <br />
        <br />
        <h5>Generate Report</h5>
        <button type="button" className="btn btn-primary" onClick={ OnGenerateClick }>Generate</button>
    </>
  );
};
