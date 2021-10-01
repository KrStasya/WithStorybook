import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingPropsType, ratingValue} from "./Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating stories',
    component: Rating,
/*    argTypes: {
        backgroundColor: { control: 'color' },
},*/
} as ComponentMeta<typeof Rating>;

/*const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;*/
const callback=action("rating changed")

export const EmptyRating = ()=> <Rating value={0} onClick={x=>x}/>;
export const Rating1 = ()=> <Rating value={1} onClick={callback}/>;
export const Rating2 = ()=> <Rating value={2} onClick={callback}/>;
export const Rating3 = ()=> <Rating value={3} onClick={callback}/>;
export const Rating4 = ()=> <Rating value={4} onClick={callback}/>;
export const Rating5 = ()=> <Rating value={5} onClick={callback}/>;

export const RatingChange = () => {
    const [rating, setrating] = useState<ratingValue>(0);
    return <Rating value={rating}
                   onClick={setrating}/>
}


/*export const Primary = Template.bind({});
Primary.args = {
    value: RatingPropsType,
    label: 'Button',
};*/
