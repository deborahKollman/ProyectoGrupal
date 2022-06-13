
import Pagination from '@mui/material/Pagination';



export default function PaginationHome({value,pagination}){

        const handle = (event, value) => {
                       
            pagination(value);

        }


        return <div>
      
           <Pagination count={value} defaultPage={1} size="large" color='primary' onChange={handle}/>
          

        </div>



};