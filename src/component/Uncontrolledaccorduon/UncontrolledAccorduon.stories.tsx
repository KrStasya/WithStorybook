import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UncontrolledAccorduon} from "./UncontrlledAccorduon";


export default {
    title: 'UncontrolledAccorduon stories',
    component: UncontrolledAccorduon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledAccorduon>;

/*const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;*/

export const MenucollabsedTrue = ()=>{

    return <UncontrolledAccorduon titleValue={"Меню"}/>
}

export const Usercollabsed = () => {
    return <UncontrolledAccorduon titleValue={"Users"}/>
}
