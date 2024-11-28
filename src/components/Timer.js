import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  return (
    <div>
      <h3>Temps restant: {time} secondes</h3>
    </div>
  );
};

export default Timer;
