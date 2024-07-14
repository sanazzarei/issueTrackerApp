import React from 'react'
import { Heading,Flex, Card ,Box} from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown'
import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function LoadingIssueDetailPage() {
  return (
    <Box className='max-w-xl'>
      <Skeleton/>    
      <Flex className='space-x-2 my-2'>
       <Skeleton width='5rem'/>
       <Skeleton width='7rem'/>
      </Flex>
      <Card className='propse mt-4'>
        <Skeleton count={3}/>
      </Card>    
    </Box>
  )
}

export default LoadingIssueDetailPage
