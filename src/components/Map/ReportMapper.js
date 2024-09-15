import React from 'react';
import { Polyline } from 'react-leaflet';
import VehiclePopUp from './RoadPopUp';

export default function ReportMapper({ data }) {
  //Return if no road data
  if (!data) return null;

  //Start to add the return JSX
  let returnJSX = [];
  for (let i = 0; i < data.roads.length; i++) {
    let r = data.roads[i];
    var cords = [[r.nodeA.latitude, r.nodeA.longitude], [r.nodeB.latitude, r.nodeB.longitude]];
    var color = GetRoadColor(r.speed, r.maxSpeed);
    returnJSX.push(<>
      <Polyline key={ i } positions={ cords } color={ color } weight={ 5 }>
        <VehiclePopUp road={ r } />
      </Polyline>
    </>);
  }

  //Return the route JSX
  return returnJSX;
};

function GetRoadColor(speed, maxSpeed) {
  const rgba1 = [255, 0, 0, 255]; //Low speed
  const rgba2 = [0, 255, 0, 255]; //High speed
  const missingValueColor = [0, 0, 255, 255]; //Speed error

  //Make sure the values are valid
  if ((speed == null) || (speed < 0) || (maxSpeed == null) || (maxSpeed <= 0)) {
    //Return a default colour if there are errors
    return `rgba(${missingValueColor[0]}, ${missingValueColor[1]}, ${missingValueColor[2]}, ${missingValueColor[3]})`;
  }
  
  //Get the speed percentage and clamp if needed
  let sp = speed / maxSpeed;
  if (sp > 1) {
    sp = 1;
  } else if (sp < 0) {
    sp = 0;
  }

  //Lerp the colour the between the two colours and return it
  let newColor = [rgba1[0] + (rgba2[0] - rgba1[0]) * sp, rgba1[1] + (rgba2[1] - rgba1[1]) * sp, rgba1[2] + (rgba2[2] - rgba1[2]) * sp, rgba1[3] + (rgba2[3] - rgba1[3]) * sp];
  return `rgba(${newColor[0]}, ${newColor[1]}, ${newColor[2]}, ${newColor[3]})`;
}
