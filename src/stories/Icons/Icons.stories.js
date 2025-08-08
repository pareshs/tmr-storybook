import { iconsList } from './Icons';
import './Icons.css';
//import iconsList from "../../images/icons.svg";
import iconsData from "./../assets/icons.json";

export default {
  title: 'Components/Icons',
  tags: ['autodocs'],
  render: (args) => iconsList(args),
  argTypes: {
  },
  args: {
    iconsData: iconsData
  },
};

export const Icons = {};