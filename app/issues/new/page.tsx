"use client"
import { Button, Callout, TextField, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import createIssueSchema from '@/app/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import dynamic from 'next/dynamic';
const SimpleMDE =dynamic(() =>import ('react-simplemde-editor') ,
{ ssr: false})

type issueForm = z.infer< typeof createIssueSchema >;

function NewIssuePage() {
    const router = useRouter();
    const { register, control, handleSubmit , formState :{errors}} = useForm<issueForm>({resolver : zodResolver(createIssueSchema)});
    const [error , setError] = useState('');
    const[IsSubmitting , setSubmitting ]= useState(false);
    const onSubmit = async (data: issueForm) => {
        try {
            setSubmitting(true);
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
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
            <Controller
                name='description'
                control={control}
                render={({ field }) => <SimpleMDE placeholder='Description...' {...field} />}
            />
             <ErrorMessage>{errors.description?.message}</ErrorMessage>
            <Button>Submit New Issue { IsSubmitting && <Spinner/>}</Button>
        </form>
        </div>
    );
}

export default NewIssuePage;
