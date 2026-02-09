import{B as n}from"./Button-H_6k8mnn.js";/* empty css               */const{fn:s}=__STORYBOOK_MODULE_TEST__,i={title:"Components/Button",tags:["autodocs"],render:({label:t,...e})=>n({label:t,...e}),argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},label:{control:"text"},onClick:{action:"onClick"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"]}},args:{label:"Button",disabled:!1,onClick:s()}},r={args:{label:"Primary Button"}},a={args:{label:"Secondary Button",variant:"secondary"}},o={args:{label:"Tertiary Button",variant:"tertiary"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary'
  }
}`,...o.parameters?.docs?.source}}};const d=["Primary","Secondary","Tertiray"];export{r as Primary,a as Secondary,o as Tertiray,d as __namedExportsOrder,i as default};
