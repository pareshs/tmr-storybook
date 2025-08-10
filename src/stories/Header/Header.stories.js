import { createHeader } from './Header';
import data from "../assets/sitedata.json";

export default {
  title: 'Layout/Header',
  tags: ['autodocs'],
  render: (args) => createHeader(args),
  parameters: {
    layout: 'padded',
  },
  argTypes: {
  },
  args: {
    data: data
  },
};

export const Header = {};
