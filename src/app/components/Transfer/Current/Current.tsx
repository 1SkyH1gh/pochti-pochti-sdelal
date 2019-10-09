import * as  React from 'react'
import {FunctionComponent} from "react";

export interface CurrentProps{

}

export const Current:FunctionComponent<CurrentProps>=(props)=>{
    return(
        <div>
            {props.children}
        </div>
    )
}
