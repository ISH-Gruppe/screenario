import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import { Rnd } from "react-rnd";

import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";

// import "./digitalerstuhlkreis/runtime-es2015";
// import "./digitalerstuhlkreis/runtime-es5";
// import "./digitalerstuhlkreis/polyfills-es2015";
// import "./digitalerstuhlkreis/polyfills-es5";
// import "./digitalerstuhlkreis/vendor-es2015";
// import "./digitalerstuhlkreis/vendor-es5";
// import "./digitalerstuhlkreis/main-es2015";
// import "./digitalerstuhlkreis/main-es5";
// import "./digitalerstuhlkreis/styles.css";

import "./digitalerstuhlkreis_prod/runtime-es2015.a4dadbc03350107420a4";
import "./digitalerstuhlkreis_prod/runtime-es5.a4dadbc03350107420a4";
import "./digitalerstuhlkreis_prod/polyfills-es2015.d9c8f3d13d7372708bac";
import "./digitalerstuhlkreis_prod/polyfills-es5.dab0688ff17f3e0c4dfd";
import "./digitalerstuhlkreis_prod/main-es2015.135e038542eda557c68f";
import "./digitalerstuhlkreis_prod/main-es5.135e038542eda557c68f";
import "./digitalerstuhlkreis_prod/styles.00f6a897faa5361a9828.css";

export default function App() {
  // if (!customElements.get('angular-component')) { customElements.define('angular-component', Angu); }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="a">
        <CountdownTimer expiryTimestamp={time} />
      </div>
      <div key="b">
        <div id="outer-grey-div">
          <div id="inner-grey-div">
            <angular-component />
          </div>
        </div>
      </div>
      <div key="c">c</div>
    </GridLayout>

    // <div>
    //   <Rnd
    //     default={{
    //       x: 0,
    //       y: 0,
    //       width: 320,
    //       height: 200,
    //     }}
    //   >
    //     <CountdownTimer expiryTimestamp={time} />
    //   </Rnd>

    //   <Rnd
    //     default={{
    //       x: 0,
    //       y: 0,
    //       width: 320,
    //       height: 200,
    //     }}
    //   >
    //     <div id="outer-grey-div">
    //       <div id="inner-grey-div">
    //         <angular-component />
    //       </div>
    //     </div>
    //   </Rnd>
    // </div>
  );
}
