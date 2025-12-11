particlesJS(
  "particles-js",

  {
    fullScreen: { enable: false },
    particles: {
      number: { value: 3 },
      color: {
        value: [
          "#1a0033",
          "#2b0066",
          "#3f00b5",
        ],
        animation: {
          enable: true,
          speed: 40,
          sync: false,
        },
      },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: {
        value: 150,
        random: false,
        animation: {
          enable: true,
          speed: 30,
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
      line_linked: {
        enable: false,
      },
      wobble: { enable: true, distance: 50, speed: 10 },
      links: { enable: false },
      rotate: { value: 0, animation: { enable: true, speed: 5, sync: false } },
    },
    interactivity: { events: { resize: true } },
    detectRetina: true,
  }
);
