import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {AccordionPropsType, Accorduon} from "./Accorduon";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accorduon stories',
    component: Accorduon,
      argTypes: {
        color: { control: 'color',
            table:{
                category: 'Colors'
            }
        },

},
}
const callback = action("accordion mode cnange event")


const Template: Story<AccordionPropsType> = (args) => <Accorduon {...args} />;
const callbackProps={
    onClick: callback
}

export const Menucollabsed2 = Template.bind({})
Menucollabsed2.args = {
    ...callbackProps,
    titleValue: "Меню",
    collapsed: true,

}
export const Usercollabsed2 = Template.bind({})
Usercollabsed2.args = {
    ...callbackProps,
    titleValue: "Users",
    collapsed: false,

}


export const MenucollabsedTrue = ()=> <Accorduon titleValue={"Меню"} collapsed={true} onClick={callback}/>;
export const UsercollabsedFalse = ()=> <Accorduon titleValue={"Users"} collapsed={false} onClick={callback}/>;
export const Menucollabsed = () => {
    const [collapsed, setcollabsed] = useState<boolean>(true);
    return <Accorduon titleValue={"Меню"}
                    collapsed={collapsed}
                      onClick={()=>setcollabsed(!collapsed)}/>
}
export const Usercollabsed = () => {
    const [collapsed, setcollabsed] = useState<boolean>(false);
    return <Accorduon titleValue={"Users"}
                      collapsed={collapsed}
                      onClick={setcollabsed}/>
}