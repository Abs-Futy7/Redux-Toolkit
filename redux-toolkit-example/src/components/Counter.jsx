
import React from 'react';

const Counter = ({ counter, onIncrement, onDecrement }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      margin: '20px', 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Counter {counter.id}: {counter.value}</h3>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={onDecrement}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Decrement (-)
        </button>
        
        <button 
          onClick={onIncrement}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Increment (+)
        </button>
      </div>
    </div>
  );
};

export default Counter;