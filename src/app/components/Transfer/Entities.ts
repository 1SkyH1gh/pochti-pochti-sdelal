import {CarsProps} from "app/components/Transfer/IslandContent";
import {clientInfo, Order} from "app/components/Transfer/Interfaces";

export const OrderEnt:Order={
    id:0,
    fromPlace:"gomel",
    to:"Minsk",
    salary:500,
    salaryisFixed:true,
    ReqInfoStart:"14.02.2018",
    ReqInfoEnd:"18.02.2018",
    RetTrnsfStart:"19.02.2018",
    RetTrensfEnd:"20.02.2018",
    places:3,
    isInvalid:true,
    total:[
        {
            amount:5
        },
        {
            identificatePol:"male"
        }
    ],
    baggage:"large",
    car:{id:0,model:"Rehaut"},
    client:{name:"Ilya",phone:"+375255428914",mail:"tormanov1999@mail.ru"},
    nameSign:"SkyHigh",
    requeierennts:"loremipsundolorAmet"
}
