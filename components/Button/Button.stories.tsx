import Button from './Button';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Press Me</Button>;

export const Primary = Template.bind({});
