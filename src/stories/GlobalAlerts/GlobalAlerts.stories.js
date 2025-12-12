import { createGlobalAlerts } from './GlobalAlerts';
import data from "../assets/sitedata.json";

export default {
  title: 'Layout/GlobalAlerts',
  tags: ['autodocs'],
  render: (args) => createGlobalAlerts(args),
  parameters: {
    layout: 'padded',
  },
  argTypes: {
  },
  args: {
    data: data
  },
};

export const GlobalAlerts = {};
