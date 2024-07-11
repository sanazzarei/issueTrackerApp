"use client"
import { Button, Callout, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface issueForm {
    title: string;
    description: string;
}

function NewIssuePage() {
    const router = useRouter();
    const { register, control, handleSubmit } = useForm<issueForm>();
    const [error , setError] = useState('');
    const onSubmit = async (data: issueForm) => {
        try {
            await axios.post('/api/issues', data);
            router.push('/issues');
        } catch (error) {
            setError('submitting form Error.')
        }
    };

    return (
        <div className='max-w-xl'>
           {error && <Callout.Root color='red' className='mb-4'>
            <Callout.Text>{error}</Callout.Text></Callout.Root>} 
        <form className=' space-y-2' onSubmit={handleSubmit(onSubmit)}>
            <TextField.Root  placeholder="Title" {...register("title")} >
            </TextField.Root>
            <Controller
                name='description'
                control={control}
                render={({ field }) => <SimpleMDE placeholder='Description...' {...field} />}
            />
            <Button>Submit New Issue</Button>
        </form>
        </div>
    );
}

export default NewIssuePage;
