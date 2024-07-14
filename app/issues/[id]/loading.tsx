import React from 'react'
import { Flex, Card ,Box} from '@radix-ui/themes';
import {Skeleton} from '../../components'


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
