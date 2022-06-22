import './styles/List.scss'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {Datatable} from '../components/Content/User/User'
import {TableCategory} from '../components/Content/Category/Category'
import {MainService} from '../components/Content/Serv/Serv'
import Orders from './Orders' 



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

const ListOfServices = () => {
  return (
    <div className="list_category">
      <Sidebar/>
      <div className="list-container">
        <Navbar/>
        <MainService/>
      </div>
    </div>
  )
}


const Order = () => {

  return (
    <div className="list_category">
      <Sidebar/>
      <div className="list-container">
        <Navbar/>
        <Orders/>
      </div>
    </div>
  )
}






export {
  List,
  ListOfCategory,
  ListOfServices,
  Order,
}


/* 

  // switch (pType) {
  //   case 'users':
  //     xDispatch()
*/