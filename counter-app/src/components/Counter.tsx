import { useEffect, useState } from "react";

type CounterProps = {
  id: number;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
};

function Counter({ id, onDelete, onComplete }: CounterProps) {
  const [seconds, setSeconds] = useState(600);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (seconds === 0) {
      onComplete(id);
      return;
    }

    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, isPaused, id, onComplete]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const stopCounter = () => {
    setSeconds(600);
    setIsPaused(false);
  };

  return (
    <div className="counter">
      <div className="timer">
        {String(minutes).padStart(2, "0")}:
        {String(remainingSeconds).padStart(2, "0")}
      </div>

      <div className="buttons">
        <button className="stop-button" onClick={stopCounter}>
          Stop
        </button>

        <button className="pause-button" onClick={togglePause}>
          {isPaused ? "Play" : "Pause"}
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Counter;