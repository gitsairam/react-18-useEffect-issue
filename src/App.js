import React, { useEffect, useRef, useEvent } from 'react';
import './style.css';

export default function App() {
  const effect = useRef();
  //solution1
  // useEffect(() => {
  //   if (effect.current) {
  //     return;
  //   }
  //   effect.current = true;
  //   console.log('effect called');
  // }, []);

  //solution2
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
