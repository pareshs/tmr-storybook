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
    headerContactHasPhone: { control: 'boolean'}, 
    headerContactHasEmail: { control: 'boolean'}, 
    headerHasSocialMedia: { control: 'boolean'}, 
    headerHasCoa: { control: 'boolean'}, 
  },
  args: {
    headerContactHasPhone: data.headerContactHasPhone,
    headerContactHasEmail: data.headerContactHasEmail,
    headerHasSocialMedia: data.headerHasSocialMedia,
    headerHasCoa: data.headerHasCoa,
    data: data
  },
};

export const Header = {};
