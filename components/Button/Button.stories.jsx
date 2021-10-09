import Button from './Button';

export default {
  component: Button,
  title: 'Button'
}

const Template = (args) => <Button {...args} >Press Me</Button>

export const Primary = Template.bind({})
