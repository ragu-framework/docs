module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        '01-01-getting-started',
        '01-02-setting-up-workspace',
      ],
    },
    {
      type: 'category',
      label: 'Core concepts',
      collapsed: false,
      items: [
        '02-01-micro-frontends',
        '02-02-consuming-a-micro-frontend',
        '02-03-server-side-rendering',
        '02-04-design-goals'
      ],
    },
    {
      type: 'category',
      label: 'React',
      collapsed: true,
      items: [
        'react/01-exposing-a-micro-frontend',
        'react/02-consuming-a-micro-frontend',
      ],
    },
    {
      type: 'category',
      label: 'Vue',
      collapsed: true,
      items: [
        'vue/01-exposing-a-micro-frontend',
      ],
    },
    {
      type: 'doc',
      id: '03-01-deployment',
    },
  ],
};
