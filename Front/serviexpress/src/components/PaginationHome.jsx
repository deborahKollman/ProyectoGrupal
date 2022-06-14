
import Pagination from '@mui/material/Pagination';



export default function PaginationHome({value,pagination,items}){

        const handle = (event, value) => {
                       
            pagination(value);

        }

        console.log(value,items);
        return <div>
      
           <Pagination count={1} defaultPage={1} size="large" color='primary' onChange={handle}/>
          

        </div>



};