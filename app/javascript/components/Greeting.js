import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRandomGreeting } from '../Redux/Greetings/greetingsReducer'

const Greeting = () => { 
  const dispatch = useDispatch();
  const { greeting, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);
  
  return (
    <div className='container'>
      <h3>{greeting}</h3>
    </div>
  );
}

export default Greeting;
