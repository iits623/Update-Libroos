/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    fullScreen: { enable: false },
    particles: {
      number: { value: 1 }, // فقط یه ذره!
      color: {
        value: [
          "#5e00ff",
          "#8a2be2",
          "#ff00ff",
          "#ff6b6b",
          "#ffd93d",
          "#1a0033",
          "#2b0066",
          "#3f00b5",
          "#5e00ff",
        ],
        animation: {
          enable: true,
          speed: 30,
          sync: false,
        },
      },
      shape: { type: "circle" },
      opacity: { value: 0.10 },
      size: {
        value: 300,
        random: false,
        animation: {
          enable: true,
          speed: 40,
          minimumValue: 600,
          maximumValue: 1000,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: true,
        straight: false,
        outModes: "bounce",
        attract: { enable: false },
      },
      wobble: { enable: true, distance: 50, speed: 10 },
      links: { enable: false },
      rotate: { value: 0, animation: { enable: true, speed: 5, sync: false } },
    },
    interactivity: { events: { resize: true } },
    detectRetina: true,
  }
);
