import { createHeader } from './Header';
import data from "../assets/sitedata.json";

export default {
  title: 'Layout/Header',
  tags: ['autodocs', "extended"],
  render: (args) => createHeader(args),
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    preHeaderVariant: {
      description: "Pre Header variations",
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
    headerVariant: {
      description: "Header variations",
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
  },
  args: {
    preHeaderVariant: data.preHeaderVariant,
    headerVariant: data.headerVariant,
    data: data
  },
};

export const Header = {};

// Pre Header
export const PreHeaderLight = {
  args:  {
    preHeaderVariant: 'light',
    data: data
  },
};

export const PreHeaderDark = {
  args:  {
    preHeaderVariant: 'dark',
    data: data
  },
};

export const PreHeaderDarkAlternate = {
  args:  {
    preHeaderVariant: 'dark-alt',
    data: data
  },
};


// Header
export const HeaderLight = {
  args:  {
    headerVariant: 'light',
    data: data
  },
};

export const HeaderDark = {
  args:  {
    headerVariant: 'dark',
    data: data
  },
};

export const HeaderDarkAlternate = {
  args:  {
    headerVariant: 'dark-alt',
    data: data
  },
};
