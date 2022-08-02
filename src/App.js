import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import { Rnd } from "react-rnd";

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200,
        }}
      >
        <CountdownTimer expiryTimestamp={time} />
      </Rnd>
    </div>
  );
}
