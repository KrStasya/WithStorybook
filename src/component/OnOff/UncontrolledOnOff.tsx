import React, {useState} from 'react';

type OnOffType = {
   /* on: boolean*/
    onChange: (on: boolean) => void

}

function UncontrolledOnOff(props: OnOffType) {
    let[ on, setOn]=useState<boolean>(false)
    const OnStyle = {
        width: 30,
        height: 15,
        padding: "2px",
        border: "1px black solid",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on? "green": "white",

    }
    const OffStyle = {
        width: 30,
        height: 15,
        padding: "2px",
        border: "1px black solid",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on? "white": "red",
    }
    const Indikator = {
        width: 15,
        height: 15,
        borderRadius: "7px",
        border: "1px black solid",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on? "green": "red",
    }

    const onClicked=()=> {
        props.onChange(true)
        setOn(true)
    }
    const offClicked= ()=>{
        props.onChange(false)
        setOn(false)}

    return (
        <div>
            <div style={OnStyle} onClick={onClicked}>On</div>
            <div style={OffStyle} onClick={offClicked}>Off</div>
            <div style={Indikator}></div>
        </div>
    )
}
export default UncontrolledOnOff