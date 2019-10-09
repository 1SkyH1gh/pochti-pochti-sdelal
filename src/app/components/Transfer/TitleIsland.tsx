import * as React from 'react'
import {FunctionComponent} from 'react'
import {Button, ButtonType} from "app/components/form/Button";
import './TitleIslandStyles.module.scss'
import { mdiCloseCircle } from '@mdi/js';
import Icon from '@mdi/react'
export interface TitleIslandProps{

    fromPlace:string,
    to:string
}

export const TitleIsland:FunctionComponent<TitleIslandProps>=(props)=>{




    return(
        <div className={"titleIsland"}>
            <div className="title">
                <div>
                    <span className="fromTo">From</span>
                    {props.fromPlace}
                </div>
                <div >
                    <span className="fromTo">to</span>
                    {props.to}
                </div>
            </div>
            <div className="buttonUnderBlock">
            <Button type={ButtonType.MAIN} smallPadding={true}  >
                <span className={"centerButton"}>
                Hide
                <Icon path={mdiCloseCircle} size={2} color={"white"}/>
                </span>
            </Button>
            </div>
        </div>
    )
}
