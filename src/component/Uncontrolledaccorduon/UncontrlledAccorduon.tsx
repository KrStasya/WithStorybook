import React, {useState} from "react";

export type UncontrolledAccordionPropsType ={
    titleValue: string
    //collapsed: boolean

}

export function UncontrolledAccorduon(props: UncontrolledAccordionPropsType) {

    let[collapsed, setcollapsed]=useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} setcollapsed={setcollapsed} collapsed={collapsed}/>
        {!collapsed && <AccordionBody/>}



    </div>
}

type AccordionTitlePropsType ={
    title: string
    setcollapsed: (collapsed:boolean)=> void
    collapsed: boolean


}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={()=> {props.setcollapsed (!props.collapsed)}}>{props.title}</h3>
        </div>
    )
}




function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}