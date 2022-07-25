import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Notion from '../Components/Notion/Notion';
import data from '../Data/data';

export default {
  title: 'Example/Notion',
  component: Notion,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Notion>;

const Template: ComponentStory<typeof Notion> = (args) => <Notion {...args} />;

export const NotionWidget = Template.bind({});
NotionWidget.args = {
    data,
};
