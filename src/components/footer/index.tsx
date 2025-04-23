
export type FooterProps={
    address:{
        place:string,
        street:string,
        postalCode:string,
        city:string,
        country:string
    },
    contact:{
        email:string,
        telephone:string
    }
    companyName:{
        mainLine:string,
        secondLine:string
    }
    links:{
        name:string,
        linkTo:string
    }[]
}

export const Footer=({address,companyName,contact,links}:FooterProps)=>{
   
    return (<div className="w-full py-16"></div>)
}























