import './styles/List.scss'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {Datatable} from '../components/DataTable/Datatable'
import {TableCategory} from '../components/DataTable/TableCategory'

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

const ListOfCategory = ({pType}) => {

  return (
    <div className="list_category">
      <Sidebar/>
      <div className="list-container">
        <Navbar/>
        <TableCategory pType={pType}/>
      </div>
    </div>
  )
}

export {
  List,
  ListOfCategory
}


/* 

  // switch (pType) {
  //   case 'users':
  //     xDispatch()
*/