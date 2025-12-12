import "../src/styles/main.css";
import "../src/styles/custom.css";


//import "../src/scripts/main.js";
//import "../src/scripts/runtime.js";
//import "../src/scripts/custom.js";

/** @type { import('@storybook/html-vite').Preview } */

import "../src/styles/main.css";

const preview = {
  parameters: {
    //centered || fullscreen || padded
    layout: 'centered',

    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};
export default preview;