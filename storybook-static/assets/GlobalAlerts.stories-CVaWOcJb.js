import{c as o}from"./GlobalAlerts-DHpUCAJG.js";import{d as a}from"./sitedata-kjDPmuCf.js";const i={title:"Layout/GlobalAlerts",tags:["autodocs","extended"],render:l=>o(l),parameters:{layout:"padded"},argTypes:{globalAlertsVariant:{description:"Global alert variations",default:"default",control:{type:"select",labels:{critical:"Critical",default:"Warning",general:"General information"}},options:["critical","default","general"]}},args:{globalAlertsVariant:a.globalAlertsVariant,data:a}},r={},e={args:{globalAlertsVariant:"critical",data:a}},t={args:{globalAlertsVariant:"default",data:a}},s={args:{globalAlertsVariant:"general",data:a}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    globalAlertsVariant: 'critical',
    data: data
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    globalAlertsVariant: 'default',
    data: data
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    globalAlertsVariant: 'general',
    data: data
  }
}`,...s.parameters?.docs?.source}}};const d=["GlobalAlerts","Critical","Warning","Info"];export{e as Critical,r as GlobalAlerts,s as Info,t as Warning,d as __namedExportsOrder,i as default};
