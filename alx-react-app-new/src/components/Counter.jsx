import React, { useState } from 'react';

function Counter() {
  // Initialize the state to track the count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Counter</h2>
      <p>Current Count: {count}</p>
      <div>
        
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          Increment
        </button>
        
        <button 
          onClick={() => setCount(count - 1)} 
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)} 
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;