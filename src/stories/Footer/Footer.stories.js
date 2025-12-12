import { createFooter } from './Footer';
import data from "./../assets/sitedata.json";

export default {
  title: 'Layout/Footer',
  tags: ['autodocs'],
  render: (args) => createFooter(args),
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    footerVariant: {
      control: {type: 'select' },
      options: ['light', 'dark', 'dark-alt'],
    },
    footerContactHasPhone: { control: 'boolean'}, 
    footerContactHasEmail: { control: 'boolean'}, 
    footerHasSocialMedia: { control: 'boolean'}, 
    footerHasCoa: { control: 'boolean'}, 
  },
  args: {
    footerVariant: data.footerVariant,
    footerContactHasPhone: data.footerContactHasPhone,
    footerContactHasEmail: data.footerContactHasEmail,
    footerHasSocialMedia: data.footerHasSocialMedia,
    footerHasCoa: data.footerHasCoa,
    data: data
  },
};

export const Footer = {};
