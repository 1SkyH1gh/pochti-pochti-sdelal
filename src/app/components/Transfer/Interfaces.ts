import {CarsProps} from "app/components/Transfer/IslandContent";


export interface clientInfo{
    name:string,
    phone:string,
    mail:string
}
export interface Order{
    id:number,
    fromPlace:string,
    to:string,
    salary:number,
    salaryisFixed?:boolean,
    ReqInfoStart:string,
    ReqInfoEnd:string,
    RetTrnsfStart:string,
    RetTrensfEnd:string,
    places:number,
    isInvalid?:boolean,
    total:[
        {
            amount:number
        },
        {
            identificatePol:"male"|"female"|"children"|"disabled"
        }
    ],
    baggage:"medium"|"small"|"large",
    car:CarsProps,
    client:clientInfo,
    nameSign:string,
    requeierennts:string



}
