import React from "react";
import { Wheel } from "react-custom-roulette";

export default function Spinwheel() {
  const [activeTab, setActiveTab] = React.useState("0");
  const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "black" } },
    { option: "1", style: { backgroundColor: "white" } },
    { option: "2" },
  ];
  const [isSpinning, setIsSpinning] = React.useState(false);

  function handleSpinClick() {
    setIsSpinning(true);
  }

  return (
    <>
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
    </>
  );
}
