import { fn } from 'storybook/test';

import { createFooter } from './Footer';
import defaultdata from "./footer.data.json";

export default {
  title: 'Layout/Footer',
  tags: ['autodocs'],
  render: (args) => createFooter(args),
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    disableCOA: { control: 'boolean'}, 
  },
  args: {
    disableCOA: false,
    data: defaultdata
  },
};

export const Footer = {};
