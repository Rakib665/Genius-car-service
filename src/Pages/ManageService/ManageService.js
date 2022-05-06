import React from 'react';
import useService from '../Hooks/UseService';

const ManageService = () => {
    const [services,setServices] = useService()
    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure?')
        if(proceed){
            fetch(`https://pure-sands-61288.herokuapp.com/service/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }
    return (
        <div className=''>
            <h2>This is the manage service</h2>
           {
               services.map(service => <div key={service._id}>
                   <h5>{service.name} <button onClick={()=>handleDeleteService(service._id)}>X</button></h5>
               </div> )
           }
        </div>
    );
};

export default ManageService;