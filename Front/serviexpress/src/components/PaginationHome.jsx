import Pagination from '@mui/material/Pagination';

export default function PaginationHome({value,pagination,items}){

    const handle = (event, value) => {pagination(value)}

    console.log(value,items);
    return <div>
             <Pagination variant="outlined" shape="rounded" count={3} defaultPage={1} size="large" onChange={handle}/>
           </div>

};