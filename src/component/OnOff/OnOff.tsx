import React from 'react';

export type OnOffType = {
    on: boolean
    onChange: (on:boolean) => void
}

function OnOff(props: OnOffType) {

    const OnStyle = {
        width: 30,
        height: 15,
        padding: "2px",
        border: "1px black solid",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on? "green": "white",

    }
    const OffStyle = {
        width: 30,
        height: 15,
        padding: "2px",
        border: "1px black solid",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on? "white": "red",
    }
    const Indikator = {
        width: 15,
        height: 15,
        borderRadius: "7px",
        border: "1px black solid",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on? "green": "red",
    }

    return (
        <div>
            {/*<div style={OnStyle} onClick={()=>{setOn(true)}}>On</div>*/}
            {/*<div style={OffStyle} onClick={()=>{setOn(false)}}>Off</div>*/}
            <div style={OnStyle} onClick={()=>{props.onChange(true)}}>On</div>
            <div style={OffStyle} onClick={()=>{props.onChange(false)}}>Off</div>
            <div style={Indikator}></div>
        </div>
    )
}
export default OnOff