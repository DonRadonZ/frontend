import React from 'react';
//import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div style={
      {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'dodgerblue',
        padding: '12px'
      }
    }>
      <button>-</button>
      <code style={{ color: '#ffffff' }}>Title</code>
      <button style={{marginLeft:"auto"}}>Button</button>
    </div>
    
  );
}

export default App;
