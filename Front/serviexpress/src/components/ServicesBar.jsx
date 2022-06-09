import Pagination from 'react-bootstrap/Pagination';
import styles from '../pages/styles/servicesBar.module.scss'


export default function ServicesBar(){




    
    return <div className={styles.container}>
    <Pagination >
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{"Electrician"}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{"Plumb"}</Pagination.Item>
  <Pagination.Item>{"Worker"}</Pagination.Item>
  <Pagination.Item>{"Carpenter"}</Pagination.Item>


  <Pagination.Ellipsis />
  <Pagination.Item>{"Painter"}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
  </Pagination>





    </div>


};