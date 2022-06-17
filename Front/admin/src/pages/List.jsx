import './styles/List.scss'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Datatable from '../components/DataTable/Datatable'

const List = ({pType}) => {

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable pType={pType}/>
      </div>
    </div>
  )
}

export default List

/* 

  // switch (pType) {
  //   case 'users':
  //     xDispatch()
*/