import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
function IssueToolbar() {
  return (
    <div className='mb-4'>
    <Button><Link href="/issues/new">New Issue</Link></Button>
    </div>
  )
}

export default IssueToolbar
