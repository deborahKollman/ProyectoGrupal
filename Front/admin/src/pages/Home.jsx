import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import './styles/Home.scss'
const Home = () => {
  return (
    <div className='home'>
        
        <Sidebar/>
        
        <div className="homeContainer">
          <Navbar/>Home Container ::
        </div>

    </div>
  )
}

export default Home