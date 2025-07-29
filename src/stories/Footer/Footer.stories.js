import { fn } from 'storybook/test';

import { createFooter } from './Footer';
import defaultdata from "./footer.data.json";

export default {
  title: 'Layout/Footer',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => createFooter(args),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  args: {
    data: {
      sitename: 'Department of Transport and Main Roads',
    },
  },
};

export const Footer = {};
