import React, { useState, useRef, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleResume = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const handleRestart = () => {
    setIsRunning(false);
    setTime(0);
    setIsRunning(true);
  };

  return (
    <div>
      <h1>{time}s</h1>
      <button onClick={handleStart} disabled={isRunning} className='button'>Start</button>
      <button onClick={handleStop} disabled={!isRunning} className='button'>Stop</button>
      <button onClick={handleResume} disabled={isRunning} className='button'>Resume</button>
      <button onClick={handleReset} className='button'>Reset</button>
      <button onClick={handleRestart} className='button'>Restart</button>
    </div>
  );
};

export default Stopwatch;
