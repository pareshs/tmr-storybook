//import {addons} from '@storybook/manager-api'
//import {themes} from '@storybook/theming'

addons.setConfig({
  theme: create({
    brandTitle: "TMR Storybook",
    brandUrl: "https://www.tmr.qld.gov.au/",
    brandImage: "./src/images/coa-landscape-2-lines.svg",
    brandTarget: '_self',
  }),
});