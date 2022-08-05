import "./App.css";
import CountdownTimer from "./components/CountdownTimer";

import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";

import "./components/digitalerstuhlkreis/runtime-es2015.a4dadbc03350107420a4";
import "./components/digitalerstuhlkreis/runtime-es5.a4dadbc03350107420a4";
import "./components/digitalerstuhlkreis/polyfills-es2015.d9c8f3d13d7372708bac";
import "./components/digitalerstuhlkreis/polyfills-es5.dab0688ff17f3e0c4dfd";
import "./components/digitalerstuhlkreis/main-es2015.d43e95d8420d8bb39d2e";
import "./components/digitalerstuhlkreis/main-es5.d43e95d8420d8bb39d2e";
import "./components/digitalerstuhlkreis/styles.00f6a897faa5361a9828.css";

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxH: 4 },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      // width={1200}
    >
      <div key="a">
        <CountdownTimer expiryTimestamp={time} />
      </div>
      <div key="b">
        <digitaler-stuhlkreis />
      </div>
    </GridLayout>
  );
}
