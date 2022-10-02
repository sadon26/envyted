import { useState } from 'react';
import Input from '.';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = () => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <Input type="text" value={value} onChange={handleChange} placeholder="Enter details" label="Name" id="name" />;
};

export const DefaultOne = Template.bind({});
