import React, {useState} from "react";
import style from './Select.module.css'

type ItemsType = {
    title: string
    value: any
}


export  type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
    onClick?:()=>void
}

export function Select(props: SelectPropsType) {
    let [active, setactive] = useState(true)
    const selectItem = props.items.find(f => f.value === props.value)
    const showlist = () => setactive(!active)
    const itemClick = (value:any) => {
        props.onChange(value)
        showlist()
    }

    return (
        <>
            <div className={style.select}>
                <span className={style.main} onClick={showlist}>{selectItem && selectItem.title}</span>
                {
                    active &&
                    <div className={style.items}>
                        {props.items.map(i => <div className={style.item}
                                key={i.value}
                                onClick={()=>{itemClick(i.value)}}
                            >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )

}
