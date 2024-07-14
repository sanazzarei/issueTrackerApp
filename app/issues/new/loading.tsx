import React from 'react'
import { Box } from '@radix-ui/themes'
import {Skeleton} from "../../components"
function LoadingNewIssuePAge() {
  return (
    <Box className='max-w-xl'>
        <Skeleton/>
        <Skeleton height='20rem'/>
    </Box>
  )
}

export default LoadingNewIssuePAge
