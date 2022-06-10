import React from 'react'
import Styles from './styles/HomePage.module.scss'
import NavBar from '../components/NavBar/NavBar'
import { useState } from 'react'

const HomePage = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(12)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className={Styles.container}>
        <NavBar/>


    </div>
  )
}

export default HomePage