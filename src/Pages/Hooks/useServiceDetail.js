import { useEffect, useState } from "react"

const useServiceDetail = serviceId =>{
    const [service,setService] = useState({})
    useEffect(()=>{
        fetch(`https://pure-sands-61288.herokuapp.com/service/${serviceId}`, 
        // {
        //     headers : { 
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //        }
        // }
        )
        .then(res=>res.json())
        .then(data => setService(data))
    },[serviceId])
    return [service]
}

export default useServiceDetail;