import "../src/styles/main.css";
//import "../src/styles/custom.css";


//import "../src/scripts/main.js";
//import "../src/scripts/runtime.js";
//import "../src/scripts/custom.js";

/** @type { import('@storybook/html-vite').Preview } */

import "../src/styles/main.css";

const preview = {
  parameters: {
    layout: 'centered', //centered || fullscreen || padded
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};
export default preview;