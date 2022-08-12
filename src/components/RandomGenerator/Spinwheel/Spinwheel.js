import React from "react";
import "./Spinwheel.scss";
import { Wheel } from "react-custom-roulette";

export default function Spinwheel() {
  const [activeTab, setActiveTab] = React.useState("0");
  const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "white" } },
    { option: "1", style: { backgroundColor: "red", textColor: "white" } },
    { option: "3", style: { backgroundColor: "blue", textColor: "white" } },
    { option: "4", style: { backgroundColor: "pink", textColor: "white" } },
    { option: "5", style: { backgroundColor: "orrange", textColor: "white" } },
    { option: "6", style: { backgroundColor: "gray", textColor: "white" } },
    { option: "7", style: { backgroundColor: "black", textColor: "white" } },
    { option: "8", style: { backgroundColor: "red", textColor: "white" } },
  ];
  const [isSpinning, setIsSpinning] = React.useState(false);

  function handleSpinClick() {
    setIsSpinning(true);
  }

  return (
    <div className="spinwheel-wrapper">
      <Wheel
        mustStartSpinning={isSpinning}
        prizeNumber={3}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        onStopSpinning={() => {
          setIsSpinning(false);
        }}
      />

      <button onClick={() => setIsSpinning(true)}>SPIN</button>
    </div>
  );
}
