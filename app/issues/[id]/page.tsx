import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import prisma from '@/prisma/client'
import { Heading,Flex, Card } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown'
import React from 'react'
import delay from 'delay';

interface Props {
    params : {id : string}
}
async function IssueDetailPage  ({params} : Props) {
    const issue = await prisma.issue.findUnique({
        where : {id : parseInt(params.id)}
    });
    if (!issue) notFound();
        await delay(2000);
    
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className='space-x-2 my-2'>
      <IssueStatusBadge status={issue.status} />
      <p>{new Date(issue.createdAt).toDateString()}</p>
      </Flex>
      <Card className='propse mt-4'>
      <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>    

    </div>
  )
}

export default IssueDetailPage
