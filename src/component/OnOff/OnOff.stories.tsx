import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOff, {OnOffType} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
}

/*const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;*/

const callback=action("on or off changed")

export const OnState = ()=> <OnOff on={true} onChange={callback}/>;
export const OffState = ()=> <OnOff on={false} onChange={callback}/>;
export const  OnOffChanget= () => {
    let [value, setvalue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setvalue}/>
}


