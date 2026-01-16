import { createGlobalAlerts } from './GlobalAlerts';
import data from "../assets/sitedata.json";

export default {
  title: 'Layout/GlobalAlerts',
  tags: ['autodocs', "extended"],
  render: (args) => createGlobalAlerts(args),
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    globalAlertsVariant: {
      description: "Global alert variations",
      default: "default",
      control: {
        type: "select",
        labels: {
          "critical": "Critical",
          "default": "Warning",
          "general": "General information",
        },
      },
      options: ['critical', 'default', 'general'],
    },
  },
  args: {
    globalAlertsVariant: data.globalAlertsVariant,
    data: data
  },
};

export const GlobalAlerts = {};

// Critical global alert story
export const Critical = {
  args:  {
    globalAlertsVariant: 'critical',
    data: data
  },
};


// Warning global alert story
export const Warning = {
  args:  {
    globalAlertsVariant: 'default',
    data: data
  },
};

// Global information alert story
export const Info = {
  args:  {
    globalAlertsVariant: 'general',
    data: data
  },
};
