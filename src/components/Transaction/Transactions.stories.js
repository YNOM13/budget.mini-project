import React from 'react';

import Transaction from './Transaction';

export default {
    title: 'Example/Transaction',
    component: Transaction,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Transaction {...args} />;

export const Income = Template.bind({});
Income.args = {
    transaction: {
        label:'some income',
        value:23,
        comment:'text',
        date:'today'
    },
};
