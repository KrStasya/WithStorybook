import React from "react";

type ItemType ={
    title: string
    value: any
}

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
   // onClick: (collapsed: boolean)=> void
    /**
     * color on header
     */
    color?: string
    items: ItemType[]
    onClick:(value:any)=>void


}

export function Accorduon(props: AccordionPropsType) {
    return <div>
        <AccordionTitle
            color={props.color}
            title={props.titleValue}
        onClick={props.onClick} collapsed={!props.collapsed}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
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


type AccordionBodyPropsType={
    items: ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((i,index)=><li
                    onClick={()=>{props.onClick(i.value)}}
                    key={index}
                >{i.title}</li>)}
            </ul>
        </div>
    )
}