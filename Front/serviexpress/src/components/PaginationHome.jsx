import Pagination from '@mui/material/Pagination';

export default function PaginationHome({value,pagination,items,pages}){

    const handle = (event, value) => {pagination(value)}

    console.log(value,items);
    return <div>
             <Pagination variant="outlined" shape="rounded" count={pages} defaultPage={1} size="large" onChange={handle}/>
           </div>

};