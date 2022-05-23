import * as React from 'react';
import DatePicker from 'react-multi-date-picker';
import './style.css';
function Example() {
  const [value, setValue] = React.useState(new Date());

  return (
    <div
      style={{
        position: 'fixed',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        height: '200px',
        maxWidth: '600px',
        backgroundColor: 'lightgray',
        borderRadius: '5px',
      }}
    >
      <div>
        <h5>Default:</h5>
        <DatePicker />
      </div>
      <div>
        <h5>Portal:</h5>
        <DatePicker multiple portal />
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <h1>Date picker</h1>
      <Example />
    </div>
  );
}
