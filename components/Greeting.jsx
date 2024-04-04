"use client";

import { useEffect, useState } from "react";

const Greeting = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);
  const getGreeting = () => {
    const hours = currentTime.getHours();

    if (hours < 12) {
      return "Good Morning";
    } else if (hours >= 12 && hours < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div>
      <h1>{getGreeting()}!</h1>
    </div>
  );
};

export default Greeting;
