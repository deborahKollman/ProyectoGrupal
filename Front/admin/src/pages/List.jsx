import './styles/List.scss'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Datatable from '../components/DataTable/Datatable'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {act_getAllUsers} from '../redux/action'

const List = ({pType}) => {

  const xDispatch = useDispatch()

  useEffect(() => {
    xDispatch(act_getAllUsers())
  }, [xDispatch])

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
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