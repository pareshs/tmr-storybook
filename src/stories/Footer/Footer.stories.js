import { createFooter } from './Footer';
import data from "./../assets/sitedata.json";

export default {
  title: 'Layout/Footer',
  tags: ['autodocs', "extended"],
  render: (args) => createFooter(args),
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    footerVariant: {
      description: "Footer variations",
      default: "dark",
      control: {
        type: 'select',
        labels: {
          "light": "Light",
          "dark": "Dark",
          "dark-alt": "Dark Alternate",
        },
      },
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

// Footer
export const FooterLight = {
  args:  {
    footerVariant: 'light',
    data: data
  },
};

export const FooterDark = {
  args:  {
    footerVariant: 'dark',
    data: data
  },
};

export const FooterDarkAlternate = {
  args:  {
    footerVariant: 'dark-alt',
    data: data
  },
};
