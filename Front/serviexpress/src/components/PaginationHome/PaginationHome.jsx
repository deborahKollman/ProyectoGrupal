import React from 'react'
import temporaryInfo from './info'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationHome = ({cardsPerPage, temporaryInfo, paginate}) => {

    const pageNumber = []
    for (let i = 1; i <= Math.ceil(temporaryInfo/cardsPerPage); i++) {
        pageNumber.push(i)
    }

  return (
    <div>
       <Stack spacing={2}>
        {
            pageNumber?.map(num => {
                
            })
        }
         <Pagination variant="outlined" shape="rounded" />
       </Stack>
    </div>
  )
}

export default PaginationHome