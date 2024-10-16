import Container from 'react-bootstrap/Container';

export default function Info() {
  return (
    <Container style={{ paddingTop: '10px' }}>
      <h2>What is this?</h2>
      <p>
        This is a React-based website which generates reports of vehicle data from Auckland Transport (AT)'s network. The speed 
        data is sourced from AT's public API and route data is sourced from OpenStreetMap's public API.
      </p>

      <h2>Limitations</h2>
      <ul>
        <li>
          <b>Collection of data -</b> Data is collected every 30 seconds which means a slideshow of the vehicle's speed is collected.
          To fix this the data is averaged out over the data's hour.
        </li>
      </ul>
      
      <h2>Pages</h2>
      <ul>
        <li>
          <b>Reports -</b> Reports is a report creation tool which allows viewing of the speed data.
        </li>
      </ul>

      <h2>References</h2>
      <ul>
        <li>
          <b>Auckland Transport -</b> All vehicle data.
        </li>
        <li>
          <b>OpenStreetMap -</b> The map layer, vehicle routes, and road data.
        </li>
        <li>
          <b>Leaflet -</b> The map, markers, and pop-ups.
        </li>
        <li>
          <b>React Leaflet -</b> React version of Leaflet.
        </li>
      </ul>
    </Container>
  );
}
