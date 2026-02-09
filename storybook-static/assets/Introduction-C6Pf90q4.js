import{j as e}from"./index-Cb5RFgm8.js";import{useMDXComponents as i}from"./index-CX3wLZrL.js";import"./_commonjsHelpers-CqkleIqs.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"introduction",children:"Introduction"}),`
`,e.jsx(n.p,{children:"We have developed a testing environment for Frontend (FED) code using Storybook and Chromatic."}),`
`,e.jsx(n.h2,{id:"storybook-open-source-software",children:"Storybook (Open Source Software)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Used for building and testing components and pages in isolation."}),`
`,e.jsx(n.li,{children:"Involves creating mock pages with components such as cards, banners, etc."}),`
`,e.jsx(n.li,{children:"These pages consist of static HTML, CSS, and JS, but Storybook allows testing of different scenarios (e.g., displaying 3 cards vs. 6 cards)."}),`
`,e.jsx(n.li,{children:"When CSS changes are made in Storybook, Chromatic compares the old screenshot with the new one and highlights the differences."}),`
`,e.jsx(n.li,{children:"Together, Storybook and Chromatic help identify accessibility issues."}),`
`]}),`
`,e.jsx(n.h2,{id:"chromatic",children:"Chromatic"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Captures screenshots, compares before-and-after images, and provides a report on any changes."}),`
`,e.jsx(n.li,{children:"Requires integration with Storybook."}),`
`]}),`
`,e.jsx(n.h2,{id:"running-and-building-storybook",children:"Running and building storybook"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Clone the repository if you have not done that already"}),`
`,e.jsxs(n.li,{children:["Execute ",e.jsx(n.code,{children:"npm install"})," in this directory to download the required dependencies"]}),`
`,e.jsxs(n.li,{children:["Execute ",e.jsx(n.code,{children:"npm run build-storybook"})," to generate and build necessary filters"]}),`
`,e.jsxs(n.li,{children:["Execute ",e.jsx(n.code,{children:"npm run storybook"})," to locally host the application"]}),`
`]}),`
`,e.jsx(n.h2,{id:"initial-steps-to-setup-storybook-for-the-first-time",children:"Initial steps to setup storybook for the first time"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Execute ",e.jsx(n.code,{children:"npm install"})," to setup npm"]}),`
`,e.jsxs(n.li,{children:["Execute ",e.jsx(n.code,{children:"npm init"})," to get the folder ready for setup"]}),`
`,e.jsxs(n.li,{children:["Execute ",e.jsx(n.code,{children:"npm create storybook@latest"})," to install storybook"]}),`
`,e.jsxs(n.li,{children:[`Install addons\r
4.1. Execute `,e.jsx(n.code,{children:"npx storybook@latest add @storybook/addon-a11y"}),`\r
4.2. Execute `,e.jsx(n.code,{children:"npx storybook@latest add  @storybook/addon-themes"}),`\r
4.3. Execute `,e.jsx(n.code,{children:"npx storybook@latest add  @chromatic-com/storybook"}),`\r
4.4 Excute `,e.jsx(n.code,{children:"npm install chromatic --save-dev"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.design-system.health.qld.gov.au/",rel:"nofollow",children:"Design System"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Qld-Health-Online-Team/design-system",rel:"nofollow",children:"Design System Repo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=46300-387622&node-type=canvas",rel:"nofollow",children:"Design System Figma"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.figma.com/design/R6c3umqUMq7kqFSgdhyjz7/MSQ-ITB?node-id=92000-20098&p=f&t=4PW4kXEI5iUybYU3-0",rel:"nofollow",children:"MSQ Figma"})}),`
`]})]})}function d(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{d as default};
