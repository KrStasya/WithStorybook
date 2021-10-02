import React from "react";

export type ratingValue = 0|1|2|3|4|5

export  type RatingPropsType ={
    value: ratingValue
    onClick: (value:ratingValue)=> void
    /**
     * color on header
     */
    color?:string
}
export function Rating(props:RatingPropsType) {
     return <div>
        <Star selected={props.value>0} value={1} onClick={props.onClick} color={props.color}/>
        <Star selected={props.value>1} value={2} onClick={props.onClick} color={props.color}/>
        <Star selected={props.value>2} value={3} onClick={props.onClick} color={props.color}/>
        <Star selected={props.value>3} value={4} onClick={props.onClick} color={props.color}/>
        <Star selected={props.value>4} value={5} onClick={props.onClick} color={props.color}/>
    </div>

}

type StarPropsType ={
    selected: boolean
    value: ratingValue
    onClick: (value:ratingValue)=> void
    color?:string
}
function Star(props: StarPropsType) {
    return <span style={{color:props.color?props.color:"black"}} onClick={()=>{props.onClick(props.value)}}>
        {props.selected? <b> star </b>: "star"}
    </span>

}