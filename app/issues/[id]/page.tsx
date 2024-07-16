import prisma from '@/prisma/client'
import {  Grid,Box ,  Heading, Flex , Card } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import React from 'react'
import delay from 'delay';
import ReactMarkdown from 'react-markdown'
import EditIssueButton from './EditIssueButton';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';

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
    <Grid columns={{ initial:"1" , md:"2" }} gap="5">
      <Box>
      <Heading>{issue.title}</Heading>
      <Flex className='space-x-2 my-2'>
      <IssueStatusBadge status={issue.status} />
      <p>{new Date(issue.createdAt).toDateString()}</p>
      </Flex>
      <Card className='propse mt-4'>
      <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>   
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id}/>
      </Box>
    </Grid>
  )
}

export default IssueDetailPage
