
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import { increment, decrement } from './features/counter/counterSlice';
import Posts from './components/Posts';

function App() {
  const counters = useSelector((state)=> state.counters); // Access the array of counters from the Redux state
  const dispatch = useDispatch();
  const totalCount = counters.reduce((total, counter) => total + counter.value, 0); // Calculate total count

  const handleIncrement = (counterId) =>{
    dispatch(increment({id: counterId}));  // here we have to send counterId to know which counter to increment
  }

  const handleDecrement = (counterId) =>{
    dispatch(decrement({id: counterId}));  // here we have to send counterId to know which counter to decrement
  }


  return (
    <div className="App">
      <h1>Redux Toolkit Example</h1>
      <h3>Total Count: {totalCount}</h3>
      <div>
        {counters.map(counter => (
          <Counter 
            key={counter.id} 
            counter={counter} 
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
        <Posts />
      </div>
    </div>
  );
}

export default App;
