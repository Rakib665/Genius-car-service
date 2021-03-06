import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`https://pure-sands-61288.herokuapp.com/service`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Add another service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'   {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='mb-3' type="submit" value='Add Service' />
            </form>

        </div>
    );
};

export default AddService;