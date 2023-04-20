import React from 'react';

import Counter from './Counter';

export default {
  title: 'Example/Counter',
  component: Counter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Counter {...args} />;

export const Income = Template.bind({});
Income.args = {
};
