import * as React from 'react'
import {FunctionComponent} from "react";
import './ItemAndIconStyles.module.scss'
import Icon from "@mdi/react";





export interface ItemAndIconProps{

    text?:string|number|Date,
    icon?:string,
    color?:"#97E3E5"|"#FFFFFF",
    size:number
}

export const ItemAndIcon:FunctionComponent<ItemAndIconProps>=(props)=>{
    return(
        <div className={"itemAndIcon"}>
            <Icon path={props.icon} color={props.color} size={props.size} />
            {props.text}
        </div>
    )
}
