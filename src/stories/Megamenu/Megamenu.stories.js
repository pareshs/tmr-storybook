import { createMegamenu } from './Megamenu';
import data from "../assets/sitedata.json";

export default {
  title: 'Layout/Mega Menu',
  tags: ['autodocs'],
  render: (args) => createMegamenu(args),
  parameters: {
    layout: 'padded',
  },
  argTypes: {
  },
  args: {
    data: data
  },
};

export const Megamenu = {};
