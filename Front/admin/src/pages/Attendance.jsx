import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import './styles/Attendance.scss'
import {ChatEngine} from 'react-chat-engine'
const Attendance = () => {
  return (
    <div className="page-attendance">
      <Sidebar/>
      <main className="attendance-main">
        <Navbar/>
        <section className='main-content'>

            <ChatEngine
                // projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
                projectID='a937c2a4-688e-4dd6-be3e-018b9dff09fb'
                userName='JALZ DELEZ'
                userSecret='123456789'
                height='calc(100vh - 9vh)'
            />

        </section>
      </main>
    </div>
  )
}

export default Attendance