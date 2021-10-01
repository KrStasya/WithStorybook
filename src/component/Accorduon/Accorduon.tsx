import React from "react";

export type AccordionPropsType ={
    /**
     * title will be changed
     */
    titleValue: string
    collapsed: boolean
    /**
     * Callback will be called when item clicked
     * @param collapsed
     */
    onClick: (collapsed: boolean)=> void
    /**
     * color on header
     */
    color?: string
}

export function Accorduon(props: AccordionPropsType) {
    return <div>
        <AccordionTitle
            color={props.color}
            title={props.titleValue}
        onClick={props.onClick} collapsed={!props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType ={
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean)=> void
    color?:string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 style={{color:props.color? props.color:"black"}}
                onClick={(e)=>{props.onClick(props.collapsed)}}
            >{props.title}</h3>
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