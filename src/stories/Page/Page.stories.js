import data from "../assets/sitedata.json";
import { createPage } from './Page';

export default {
  title: 'Wrapper/Full Page',
  render: (args) => createPage(args),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    data: data
  },
};

export const Page = {};