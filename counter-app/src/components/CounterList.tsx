type CounterData = {
  id: number;
  startTime: string;
  endTime: string | null;
  completed: boolean;
};

type CounterListProps = {
  counters: CounterData[];
};

function CounterList({ counters }: CounterListProps) {
  return (
    <div className="counter-list">
      <h2>Counter List</h2>

      <table>
        <thead>
          <tr>
            <th>CounterId</th>
            <th>StartTime</th>
            <th>EndTime</th>
            <th>Completed?</th>
          </tr>
        </thead>

        <tbody>
          {counters.map((counter) => (
            <tr key={counter.id}>
              <td>{counter.id}</td>
              <td>{counter.startTime}</td>
              <td>{counter.endTime ?? "-"}</td>
              <td>
                {counter.completed ? (
                  <span className="completed">Yes</span>
                ) : (
                  <span className="not-completed">No</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CounterList;