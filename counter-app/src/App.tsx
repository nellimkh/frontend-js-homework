import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterList from "./components/CounterList";

type CounterData = {
  id: number;
  startTime: string;
  endTime: string | null;
  completed: boolean;
};

function App() {
  const [counters, setCounters] = useState<CounterData[]>([]);

  const createCounter = () => {
    const newCounter: CounterData = {
      id: Date.now(),
      startTime: new Date().toLocaleTimeString(),
      endTime: null,
      completed: false,
    };

    setCounters((prev) => [...prev, newCounter]);
  };

  const deleteCounter = (id: number) => {
    setCounters((prev) =>
      prev.filter((counter) => counter.id !== id)
    );
  };

  const completeCounter = (id: number) => {
    setCounters((prev) =>
      prev.map((counter) =>
        counter.id === id && !counter.completed
          ? {
              ...counter,
              endTime: new Date().toLocaleTimeString(),
              completed: true,
            }
          : counter
      )
    );
  };

  return (
    <div className="app">
      <h1>Counter App</h1>

      <button className="create-button" onClick={createCounter}>
        + Create Counter
      </button>

      <div className="counters">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={deleteCounter}
            onComplete={completeCounter}
          />
        ))}
      </div>

      <CounterList counters={counters} />
    </div>
  );
}

export default App;
