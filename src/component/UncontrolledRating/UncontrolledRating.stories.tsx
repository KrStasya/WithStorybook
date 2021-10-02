import React, {useState} from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UnControlledRating} from "./UnControlledRating";


export default {
    title: 'UncontrolledRating stories',
    component: UnControlledRating,
  argTypes: {
        backgroundColor: { control: 'color' },
     /* table:{
          category: 'Colors'
      }*/
},
};

/*const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;
const callbackProps={
    onClick: callback
}

export const RatingChange1=Template.bind({})
RatingChange1.args={
    ...callbackProps,
    value:1,
}*/


export const RatingChange = () => {

    return <UnControlledRating/>
}


/*export const Primary = Template.bind({});
Primary.args = {
    value: RatingPropsType,
    label: 'Button',
};*/
