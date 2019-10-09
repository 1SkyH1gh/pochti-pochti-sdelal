import * as React from 'react'
import {ChangeEvent, FunctionComponent} from 'react'
import {ItemAndIcon} from "app/components/Transfer/ItemAndIcon";
import Icon from '@mdi/react'
import './IslandContentStyles.module.scss'
import {mdiCalendarAlert} from '@mdi/js'
import {BaseInput, BaseInputSize, BaseInputType} from "app/components/form/BaseInput";
import {Button, ButtonType} from "app/components/form/Button";


export interface IslandContentProps{
    select:(e: ChangeEvent<HTMLSelectElement>)=>void,
    input:(e: ChangeEvent<HTMLInputElement>)=>void,
    renderForm:boolean,
    dropdown:()=>void,
    isFixed?:boolean,
    salary:number,
    pushToCurrent:()=>void
}
export interface CarsProps {
    id:number,
    model:string,
    size?:number,
    placeAmount?:number,
    invalidPlace?:number,
    color?:string,
    number?:number
}

export const Cars:CarsProps[]=[
    {model:"Rehaut",id:0},
    {model:"Tesla",id:1},
    {model:"Peugeot",id:2},
    {model:"BMW",id:3},
]



export const IslandContent:FunctionComponent<IslandContentProps>=(props)=>{


    const render=props.renderForm

    return(


        <div className={"islandContent"}>
                <table>
                    <tr className="column">
                        <td> Request info</td>
                        <td> <ItemAndIcon size={1}
                                          color={"#97E3E5"}
                                          text={"12.12.2018"}
                                          icon={mdiCalendarAlert} />
                        </td>
                        <td> <ItemAndIcon size={1}
                                          color={"#97E3E5"}
                                          text={"12.12.2018"}
                                          icon={mdiCalendarAlert} /> </td>
                        <td> <ItemAndIcon size={1}
                                          color={"#97E3E5"}
                                          text={3}
                                          icon={mdiCalendarAlert} /> </td>
                        <td><ItemAndIcon size={1}
                                         color={"#97E3E5"}

                                         icon={mdiCalendarAlert} /> </td>
                    </tr>
                    <tr className="column">
                        <td>Return transfer</td>
                        <td> <ItemAndIcon size={1}
                                          color={"#97E3E5"}
                                          text={"12.12.2018"}
                                          icon={mdiCalendarAlert} />
                        </td>
                        <td> <ItemAndIcon size={1}
                                          color={"#97E3E5"}
                                          text={"12.12.2018"}
                                          icon={mdiCalendarAlert} />
                        </td>
                    </tr>
                </table>
                <React.Fragment>
                    {render?
                        <div className="ready">
                            <div className="salary">
                                <span>
                                    {props.isFixed?"fixed":""}
                                </span>
                                <span>
                                    {props.salary + "$"}
                                </span>
                            </div>

                             <Button type={ButtonType.MAIN} children={"Take the order"} onClick={props.pushToCurrent}/>
                        </div>
                        :
                       <div className="setPrice">
                        <BaseInput type={BaseInputType.TEXT}
                                   size={BaseInputSize.S}
                                   placeholder={"price"}
                                   onChange={props.input}
                        />
                        <select className={"select"}
                        onChange={props.select}
                        placeholder={"choice a car"}

                        >

                    {Cars.map(car=>

                        <option value={car.model} key={car.id}>{car.model}</option>

                        )}
                        </select>
                       </div>
                    }

                </React.Fragment>

        </div>
    )
}

