import React, { useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const effect = useRef();
  // useEffect(() => {
  //   if (effect.current) {
  //     return;
  //   }
  //   effect.current = true;
  //   console.log('effect called');
  // }, []);
  useEffect(() => {
    console.log('effect called');
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
