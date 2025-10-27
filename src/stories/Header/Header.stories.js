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
    preHeaderVariant: {
      control: {type: 'select' },
      options: ['light', 'dark', 'dark-alt'],
    },
    headerVariant: {
      control: {type: 'select' },
      options: ['light', 'dark', 'dark-alt'],
    },
  },
  args: {
    preHeaderVariant: data.preHeaderVariant,
    headerVariant: data.headerVariant,
    data: data
  },
};

export const Header = {};
