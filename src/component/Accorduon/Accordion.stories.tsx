import React, {useState} from 'react';
import {Story} from '@storybook/react';
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
const callback = action("accordion mode change event")


const Template: Story<AccordionPropsType> = (args) => <Accorduon {...args} />;
const callbackProps={
    onClick: callback
}

export const Menucollabsed2 = Template.bind({})
Menucollabsed2.args = {
    ...callbackProps,
    titleValue: "Меню",
    collapsed: true,
    items:[]

}
export const Usercollabsed2 = Template.bind({})
Usercollabsed2.args = {
    ...callbackProps,
    titleValue: "Users",
    collapsed: false,
    items:[
        {title: "Bob", value:1},
        {title: "Joe",value:2},
        {title: "Kristy",value:3},
        {title: "Anna",value:4},
    ]

}
export const Menucollabsed22:Story<AccordionPropsType> = (args) => {
    const [collapsed, setcollabsed] = useState<boolean>(true);
    return <Accorduon {...args} collapsed={collapsed} onClick={()=>setcollabsed(!collapsed)}/>
}
Menucollabsed22.args={
    titleValue:"Меню",
    items:[
        {title: "Bob", value:1},
        {title: "Joe",value:2},
        {title: "Kristy",value:3},
        {title: "Anna",value:4},
    ]
}

export const Usercollabsed22:Story<AccordionPropsType> = (args) => {
    const [collapsed, setcollabsed] = useState<boolean>(true);
    return <Accorduon {...args} collapsed={collapsed} onClick={()=>setcollabsed(!collapsed)}/>
}
Usercollabsed22.args={
    titleValue:"Users",
    items:[
        {title: "Bob", value:1},
        {title: "Joe",value:2},
        {title: "Kristy",value:3},
        {title: "Anna",value:4},
    ]
}


/*
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
}*/
