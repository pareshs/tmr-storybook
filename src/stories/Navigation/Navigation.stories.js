import { createNavigation } from './Navigation';
import data from "../assets/sitedata.json";

export default {
  title: 'Layout/Navigation',
  tags: ['autodocs'],
  render: (args) => createNavigation(args),
  parameters: {
    layout: 'padded',
  },
  argTypes: {
  },
  args: {
    data: data
  },
};

export const Navigation = {};
