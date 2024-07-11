"use client"
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
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

    const onSubmit = async (data: issueForm) => {
        try {
            await axios.post('/api/issues', data);
            router.push('/issues');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form className='max-w-xl space-y-2' onSubmit={handleSubmit(onSubmit)}>
            <TextField.Root  placeholder="Title" {...register("title")} >
            </TextField.Root>
            <Controller
                name='description'
                control={control}
                render={({ field }) => <SimpleMDE placeholder='Description...' {...field} />}
            />
            <Button>Submit New Issue</Button>
        </form>
    );
}

export default NewIssuePage;
