import React from "react";
import "./CustomSpinwheel.scss";

// Not as responsive as promised
// https://codepen.io/hidanielle/pen/ERpRJO
export default function CustomWheel() {
  const spinContainer = document.getElementById("container");
  const spinBtn = document.getElementById("spin");
  const spinWheel = document.getElementById("wheel");

  function handleClick() {
    const lengthOfSpin =
      getComputedStyle(spinWheel).getPropertyValue("--spin-time");
    const startingDeg = Number(spinWheel.dataset.currDeg) || 500;
    const randDeg =
      startingDeg + Math.round(Math.random() * (3000 - 360) + 360);

    spinContainer.classList.add("is-spinning");
    spinWheel.style.transform = `rotate(${randDeg}deg)`;

    spinWheel.dataset.currDeg = randDeg;

    setTimeout(() => {
      spinContainer.classList.remove("is-spinning");
    }, lengthOfSpin);
  }

  //   spinBtn.addEventListener("click", (e) => {
  //     const lengthOfSpin =
  //       getComputedStyle(spinWheel).getPropertyValue("--spin-time");
  //     const startingDeg = Number(spinWheel.dataset.currDeg) || 500;
  //     const randDeg =
  //       startingDeg + Math.round(Math.random() * (3000 - 360) + 360);

  //     spinContainer.classList.add("is-spinning");
  //     spinWheel.style.transform = `rotate(${randDeg}deg)`;

  //     spinWheel.dataset.currDeg = randDeg;

  //     setTimeout(() => {
  //       spinContainer.classList.remove("is-spinning");
  //     }, lengthOfSpin);
  //   });

  return (
    <div id="main">
      <div class="spinner" id="container">
        <div class="spinner-lever">
          <button
            onClick={handleClick}
            class="spinner-lever-button"
            id="spin"
            type="button"
          >
            Pull the lever to spin the wheel
          </button>
        </div>
        <ul class="spinner-list" id="wheel">
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
          <li class="spinner-slice">
            <p class="spinner-slice-text" contentEditable="contentEditable">
              Prize title
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
