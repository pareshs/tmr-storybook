import { fn } from 'storybook/test';

import { createButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    //primary: { control: 'boolean' },
    btnType: {
      control: {type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    }

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    btnType: 'secondary',
  },
};

export const Tertiray = {
  args: {
    label: 'Tertiary',
    btnType: 'tertiary',
  }
}