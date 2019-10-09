import * as React from 'react'
import {ChangeEvent, FunctionComponent, useState} from 'react'

import "./ContentStyles.module.scss"
import {FormContainer} from "app/components/Transfer/FormContainer";
import {Island} from "app/components/Island/Island";
import {TitleIsland} from "app/components/Transfer/TitleIsland";
import {IslandContent} from "app/components/Transfer/IslandContent";
import {SetThePrice} from "app/components/Transfer/SetThePrice";
import {ButtonType} from "app/components/form/Button";
import {ShowMore} from "app/components/Transfer/ShowMore";







export interface ContentProps{
    pushToCurrent?:()=>void

}

export const Content:FunctionComponent<ContentProps>=(props)=>{

    const [select,setSelect]=useState()
    const [input,setInput]=useState()
    const [handleClick,setHandleClick]=useState()
    const [dropdown,setDropdown]=useState()
    return(
        <div className={"containerContent"} >


            <Island>
               <TitleIsland  fromPlace={"Gomel,Park Festivalnuy"}
                             to={"Minsk,Manejskaya Street"}/>
               <IslandContent  select={(e: ChangeEvent<HTMLSelectElement>)=>setSelect(e.target.value)}
                               input={(e: ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}
                               renderForm={handleClick}
                               dropdown={()=>setDropdown(!dropdown)}
                               isFixed={true}
                               salary={input}
                               pushToCurrent={props.pushToCurrent}
               />
                {!handleClick?
                    <React.Fragment>
                    {select && input ? <SetThePrice disabled={false} type={ButtonType.MAIN}
                                                    handleClick={() => setHandleClick(true)}/>
                        : <SetThePrice disabled={true} type={ButtonType.__VK}
                                       text={"choose a car and set the price"}/>}
                    </React.Fragment>
                    :
                    null
                }
                {
                    handleClick?
                        <div  className={"showMoreString"}>
                                <div onClick={()=>setDropdown(!dropdown)}>Show more</div>
                                <div className="pointerBorder"/>

                        </div>
                        :
                        null
                }
                {
                    dropdown?
                        <ShowMore/>
                        :
                        null
                }


            </Island>
        </div>
    )
}
