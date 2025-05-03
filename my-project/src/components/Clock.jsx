import { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString() + ' ' +
        now.toLocaleDateString(undefined, {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="clock-footer">
      {time}
    </footer>
  );
};

export default Clock;
