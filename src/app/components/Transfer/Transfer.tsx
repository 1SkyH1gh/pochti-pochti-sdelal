import * as React from 'react'
import {FunctionComponent, useState} from "react";
import {Content} from "app/components/Transfer/Content";
import {Header} from "app/components/Transfer/Header";
import './TransferStyles.module.scss'

import svg1 from '/app/svg/25/disabled.svg'
import svg2 from'/app/app/svg/20/calendar-1.svg'
import svg3 from'/app/app/svg/20/calendar-5.svg'
import svg4 from'/app/app/svg/30/clock-1.svg'
import svg5 from'/app/app/svg/30/clock-2.svg'
import svg6 from'/app/app/svg/30/passenger.svg'
import svg7 from'/app/app/svg/30/disabled.svg'
import svg from '/app/svg/25/disabled.svg'
import {Current} from "app/components/Transfer/Current/Current";
import {FormContainer} from "app/components/Transfer/FormContainer";

export interface TransferProps{

}

export const Transfer:FunctionComponent<TransferProps>=()=>{
        const [current,setCurrent]=useState()
        const [request,setRequest]=useState()
    const [pushCurrent,setPushCurrent]=useState()
    return(
        <div className={"Transfer"}>
            <Header current={()=>setCurrent(true)} request={()=>setRequest(true)}/>
            <FormContainer/>
<Content pushToCurrent={()=>setPushCurrent(true)} />
            <Content pushToCurrent={()=>setPushCurrent(true)} />
      
    <Current>
        {pushCurrent?<Content/>:""}
    </Current>
        </div>
    )
}
