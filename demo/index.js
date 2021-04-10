import MotorCortex from "@kissmybutton/motorcortex";
import Player from "@kissmybutton/motorcortex-player";
import MCCounter from "../dist/motorcortex-counter.umd";

const Counter = MotorCortex.loadPlugin(MCCounter);

const clip = new MotorCortex.HTMLClip({
  html: `
    <div class="container">
      <div id="number-counter">
        <p class="effect-target">100</p>
        <p>%</p>
      </div>
    </div>
  `,
  css: `
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background:white;
    }
    #number-counter {
      width: 60%;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 800%;
    }
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "600px",
  },
});

const counterEffect = new Counter.Counter(
  {
    animatedAttrs: {
      count: 110,
    },
    initialValues: {
      count: 16,
    },
  },
  {
    selector: ".effect-target",
    duration: 1000,
    easing: "easeInQuad",
  }
);
clip.addIncident(counterEffect, 0);

const counterEffect2 = new Counter.Counter(
  {
    animatedAttrs: {
      count: 50,
    },
    decimals: 2,
  },
  {
    selector: ".effect-target",
    duration: 1000,
    easing: "easeInOutQuad",
  }
);

clip.addIncident(counterEffect2, 1000);

const player = new Player({ clip });
