import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
import swal from 'sweetalert';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Successfully You Add a Product .",
                        icon: "success",
                        button: "Done",
                    });
                    reset();
                }
            })
    };
    return (
        <div>
            <h1 className='text-center p-4 text-color-services text-success'>Add a Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="input-main my-4">
                <input className='inputStyle' {...register("name")} placeholder="Enter Bike Name" />

                <textarea className='textarea-input' {...register("description")} placeholder="Short Description" />

                <input className='inputStyle' {...register("img")} placeholder='Img Link' />

                <input className='inputStyle' type="number" {...register("price")} placeholder='Price' />

                <input className='inputStyle submit-btn' type="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;