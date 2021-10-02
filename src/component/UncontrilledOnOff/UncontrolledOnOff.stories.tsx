import React from 'react';
import {Story } from '@storybook/react';
import UncontrolledOnOff from "./UncontrolledOnOff";
import { OnOffType } from "../OnOff/OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}
const callback=action("on or off changed")

const Template: Story<OnOffType> = (args) => <UncontrolledOnOff {...args} />;

export const UncontrolledOnOff1 = Template.bind({})
UncontrolledOnOff1.args = {
    on:true,
    onChange:callback
}
export const UncontrolledOnOff2 = Template.bind({})
UncontrolledOnOff2.args = {
    on:false,
    onChange:callback
}


/*
export const UncontrolledOnOff3: Story<OnOffType> =(args) => {
   let [ on, setOn]=useState<boolean>(false)
    return <UncontrolledOnOff onChange={()=>setOn(!on)}/>
}
*/


export const OnState = ()=> <UncontrolledOnOff defaultValue={true} onChange={callback} />;
export const OffState = ()=> <UncontrolledOnOff defaultValue={false} onChange={callback}/>;
export const  OnOffChanget= () => {
    return <UncontrolledOnOff onChange={callback}/>
}
