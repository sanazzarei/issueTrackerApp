import React from 'react'
import { Table } from '@radix-ui/themes'
import {IssueStatusBadge , Link} from '../components'
import prisma from '@/prisma/client'
import delay from 'delay'
import IssueToolbar from './IssueToolbar'
const IssuePage = async() => {
 const issues = await prisma.issue.findMany();
 await delay(2000);
  return (
    <div>
     <IssueToolbar/>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue : any) => (<Table.Row key={issue.id}>
            <Table.Cell><Link href={`/issues/${issue.id}`}> {issue.title}
            </Link>
              <div className='block md:hidden'> {issue.status}</div>
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status}/></Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{new Date(issue.createdAt).toDateString()}</Table.Cell>

          </Table.Row>))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default IssuePage
