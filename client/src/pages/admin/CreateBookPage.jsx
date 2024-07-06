import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { commonConfig } from '../../utils/config/config';

const CreateBookPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newBook = {
            ...data
        };

        console.log(newBook);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem(commonConfig.ACCESS_TOKEN)}`,
                },
            };
            await axios.post('/books', newBook, config);
            navigate('/admin'); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="form-container">
            <h1>Create New Book</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register("title", { required: "Title is required" })}
                        aria-invalid={errors.title ? "true" : "false"} 
                    />
                    {errors.title && <span className="text-danger">{errors.title.message}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Author"
                        {...register("author", { required: "Author is required" })}
                        aria-invalid={errors.author ? "true" : "false"} 
                    />
                    {errors.author && <span className="text-danger">{errors.author.message}</span>}
                </div>
                <div>
                    <textarea
                        placeholder="Description"
                        {...register("description", { required: "Description is required" })}
                        aria-invalid={errors.description ? "true" : "false"}
                    ></textarea>
                    {errors.description && <span className="text-danger">{errors.description.message}</span>}
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Price"
                        {...register("price", { required: "Price is required", min: { value: 0, message: "Price must be a positive number" } })}
                        aria-invalid={errors.price ? "true" : "false"} 
                    />
                    {errors.price && <span className="text-danger">{errors.price.message}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Cover Image URL"
                        {...register("coverImage", { required: "Cover Image URL is required" })}
                        aria-invalid={errors.coverImage ? "true" : "false"} 
                    />
                    {errors.coverImage && <span className="text-danger">{errors.coverImage.message}</span>}
                </div>
                <button type="submit">Create Book</button>
            </form>
        </div>
    );
};

export default CreateBookPage;
