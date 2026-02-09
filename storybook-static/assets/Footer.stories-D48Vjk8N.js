import{c as n}from"./Footer-DqLDrhOv.js";import{d as a}from"./sitedata-kjDPmuCf.js";import"./Button-H_6k8mnn.js";/* empty css               */const p={title:"Layout/Footer",tags:["autodocs","extended"],render:s=>n(s),parameters:{layout:"padded"},argTypes:{footerVariant:{description:"Footer variations",default:"dark",control:{type:"select",labels:{light:"Light",dark:"Dark","dark-alt":"Dark Alternate"}},options:["light","dark","dark-alt"]},footerContactHasPhone:{control:"boolean"},footerContactHasEmail:{control:"boolean"},footerHasSocialMedia:{control:"boolean"},footerHasCoa:{control:"boolean"}},args:{footerVariant:a.footerVariant,footerContactHasPhone:a.footerContactHasPhone,footerContactHasEmail:a.footerContactHasEmail,footerHasSocialMedia:a.footerHasSocialMedia,footerHasCoa:a.footerHasCoa,data:a}},o={},r={args:{footerVariant:"light",data:a}},t={args:{footerVariant:"dark",data:a}},e={args:{footerVariant:"dark-alt",data:a}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    footerVariant: 'light',
    data: data
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    footerVariant: 'dark',
    data: data
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    footerVariant: 'dark-alt',
    data: data
  }
}`,...e.parameters?.docs?.source}}};const m=["Footer","FooterLight","FooterDark","FooterDarkAlternate"];export{o as Footer,t as FooterDark,e as FooterDarkAlternate,r as FooterLight,m as __namedExportsOrder,p as default};
