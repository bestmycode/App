import React from 'react';
import DatePicker from '../components/DatePicker';

/**
 * We use the Component Story Format for writing stories. Follow the docs here:
 *
 * https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
 */
export default {
    title: 'Components/Datepicker',
    component: DatePicker,
    argTypes: {
        onChange: {action: 'date changed'},
    },
    args: {
        value: '',
        label: 'Select Date',
        placeholder: 'Date Placeholder',
        errorText: '',
        hasError: false,
    },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = args => <DatePicker {...args} />;

// Arguments can be passed to the component by binding
// See: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default = Template.bind({});
export const PreFilled = Template.bind({});
Default.args = {
    label: 'Select Date',
};

PreFilled.args = {
    label: 'Select Date',
    value: new Date(2018, 7, 21),
};
