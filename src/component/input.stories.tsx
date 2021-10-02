import React, {ChangeEvent, useState} from 'react';
import {Input, InputType} from "./Input";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'input stories',
    //component: Input,
}
/*const callback = action("input mode change event")


const Template: Story<InputType> = (args) => <Input {...args} />;

export const UncontrolledInput =Template.bind({})

 UncontrolledInput.args ={
    color: "red"
 }*/

 export const ControlledInput=()=>{
    let [parentsValue,setparentsValue]=useState<string>("")
     const onChange=(e:ChangeEvent<HTMLInputElement>)=>{setparentsValue(e.currentTarget.value)}
    return (
        <div>
            <input value={parentsValue} onChange={onChange}/>
        </div>
        )
 }


export const ControlledCheckbox=()=>{
    let [parentsValue,setparentsValue]=useState<boolean>(true)
   const onChange=(e:ChangeEvent<HTMLInputElement>)=>{setparentsValue(e.currentTarget.checked)}
    return (
        <div>
            <input checked={parentsValue} onChange={onChange}/>
        </div>
    )
}

export const ControlledSelect=()=>{
    let [parentsValue,setparentsValue]=useState<string|undefined>(undefined)
    const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{setparentsValue(e.currentTarget.value)}
    return (
        <div>
            <select value={parentsValue} onChange={onChange}>
                <option>none</option>
                <option value={"1"}>Minsk</option>
                <option value={"2"}>Moskoy</option>
                <option value={"3"}>Kiev</option>
            </select>
        </div>
    )
}


/*
export const ControlledInput=()=> <input defaultValue={"Hello"}/>

export const TrackControlledInput=()=> {
  let [value,setvalue]=useState("")
      return(
          <div><input onChange={(e) => {
            const inputValue = e.currentTarget.value
            setvalue(inputValue)
          }}/> {value}
          </div>
      )
}

export const ButtonkControlledInput=()=> {
  let [value,setvalue]=useState("")
    const inputRef=useRef<HTMLInputElement>(null)
    const save=()=>{
        const el=inputRef.current as HTMLInputElement
        setvalue(el.value)}
  return (
      <div><input ref={inputRef}/>
        <button onClick={save}>save</button> -actual value {value}
      </div>
      )
}
*/
