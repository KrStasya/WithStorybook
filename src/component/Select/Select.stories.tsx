import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from './Select';



export default {
    title: 'Select stories',
    component: Select,
}

export const SelectBase:Story<SelectPropsType> = (args) => {
    let [value,setvalue]=useState<any>(null)
    return <Select {...args}
                       value={value}
                       onClick={()=>setvalue(value)}/>
}
SelectBase.args = {
    items: [
        {title: "Cat", value: "1"},
        {title: "Dog", value: "2"},
        {title: "Bird", value: "3"},
    ],
}

/*export const Menucollabsed22:Story<AccordionPropsType> = (args) => {
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
}*/


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
