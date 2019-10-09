import * as React from 'react'
import {FunctionComponent} from "react";
import "./HeaderStyles.module.scss"
export interface HeaderProps{
    request:()=>void
    current:()=>void
}

export const Header:FunctionComponent<HeaderProps>=(props)=>{
    return(
        <div className={"Header"}>
            <div className={"fColumn"}/>
            <div className={"sColumn"}>
                <span onClick={props.request}>
                    Request
                </span>
                <span onClick={props.current}>
                    Current
                </span>

            </div>
        </div>
    )
}
