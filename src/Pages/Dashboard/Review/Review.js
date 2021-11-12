import React from 'react';
import Alert from '@mui/material/Alert';
import { useForm } from "react-hook-form";
import './Review.css'
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Review = () => {
    const { user } = useAuth();
    const name = user?.displayName;
    const image = user?.photoURL;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        data.name = name;
        data.reviewImage = image;

        fetch('https://vast-shore-61104.herokuapp.com/reviews', {
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
                        title: "Review Submitted",
                        text: "Successfully you give your Feedback..",
                        icon: "success",
                        button: "Done",
                    });
                    reset();
                }
            })
    };

    console.log(user);

    return (
        <div data-aos="fade-right">
            <h1 className='text-center mb-5 text-decoration-underline text-success'>Give Your Feedback</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("comment", { required: true })} placeholder="Write about Our Service" className="d-block mx-auto textarea-input" />
                <select {...register("responseRate")} className="d-block mx-auto inputStyle width-select">
                    <option value="5">Excellent</option>
                    <option value="4">Very Good</option>
                    <option value="3">Good</option>
                    <option value="2">Poor</option>
                    <option value="1">Very Poor</option>
                </select>
                <input type="submit" className="d-block mx-auto btn btn-success px-5" />
                {
                    errors.comment?.type === 'required' && <div className='w-25 d-block mx-auto mt-2'><Alert severity="warning">Comment is required</Alert></div>
                }

            </form>
        </div>
    );
};

export default Review;