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

export default function DayDropdown({ dropdownSelectHandle }) {
  //Currently selected value text and handle injection
  const [currentSelected, setCurrentSelected] = useState("");
  
  const injectedSelectHandle = (eventKey) => {
    //Divide the event key (first part is day as text, second is day as an int where 0 = Monday and 6 = Sunday)
    let keys = eventKey.split(',');

    //Update selected value
    setCurrentSelected(keys[0]);

    //Pass the value to the handle
    dropdownSelectHandle(keys[1]);
  }

  //Build days list
  let dayValues = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let days = [];
  for (let i = 0; i < dayValues.length; i++) {
    days.push(
      <Dropdown.Item eventKey={dayValues[i] + ',' + i} key={dayValues[i]}>
        {dayValues[i]}
      </Dropdown.Item>
    );
  }
  
  return (
    <>
      <Dropdown onSelect={injectedSelectHandle}>
        <Dropdown.Toggle id="route-select-dropdown" style={{width: '135px'}}>
          {currentSelected === "" ? (
            'Select Day'
          ) : (
            currentSelected
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{zIndex: 1001}} as={filter}> 
          {days}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
