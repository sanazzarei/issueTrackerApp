import React from 'react'
import { Badge } from '@radix-ui/themes';
export enum Status {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    CLOSED = 'CLOSED'
  }

interface Props{
    status : Status;
}
function IssueStatusBadge({status} : Props) {
    if(status === 'OPEN'){
        return <Badge color='red'>OPen</Badge>
    }
    if(status === 'IN_PROGRESS'){
        return <Badge color='orange'>In Progress</Badge>

    }
    else 
    return <Badge color='green'>Closed</Badge>

}

export default IssueStatusBadge
