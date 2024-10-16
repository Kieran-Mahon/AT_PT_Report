import React from 'react';
import { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

const filter = React.forwardRef(({ children, style, className }, ref) => {
    const [value, setValue] = useState('');
    return (
      <div ref={ref} style={style} className={className}>
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled" style={{ maxHeight: "200px", overflowY: "auto" }}>
          {React.Children.toArray(children).filter((child) => !value || child.props.children.toUpperCase().startsWith(value.toUpperCase()))}
        </ul>
      </div>
    );
  },
);

export default function HourDropdown({ dropdownSelectHandle }) {
  //Currently selected value text and handle injection
  const [currentSelected, setCurrentSelected] = useState("");
  
  const injectedSelectHandle = (eventKey) => {
    //Divide the event key (first part is hour as text, second is hour as an int where 0 = 5 AM all the way to 22 = 3 AM)
    let keys = eventKey.split(',');

    //Update selected value
    setCurrentSelected(keys[0]);

    //Pass the value to the handle
    dropdownSelectHandle(keys[1]);
  }

  //Build hour list
  let hourValues = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];
  let hours = [];
  for (let i = 0; i < hourValues.length; i++) {
    hours.push(
      <Dropdown.Item eventKey={hourValues[i] + ',' + i} key={hourValues[i]}>
        {hourValues[i]}
      </Dropdown.Item>
    );
  }
  
  return (
    <>
      <Dropdown onSelect={injectedSelectHandle}>
        <Dropdown.Toggle id="route-select-dropdown" style={{width: '135px'}}>
          {currentSelected === "" ? (
            'Select Hour'
          ) : (
            currentSelected
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{zIndex: 1001}} as={filter}> 
          {hours}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
