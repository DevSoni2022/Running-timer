import BtnDisPlay from "./Component/BtnDisPlay";
import DisPlay from "./Component/DisPlay";
import "./styles.css";
import { useState } from "react";
const App = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setinterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    setStatus(1);
    run();
    setinterv(setInterval(run, 10));
  };
  let updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 60) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisPlay time={time} />
          <BtnDisPlay status={status} reset={reset} stop={stop} start={start} />
        </div>
      </div>
    </div>
  );
};

export default App;
