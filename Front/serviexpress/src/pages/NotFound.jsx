import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Styles from './styles/LandingPage.module.scss'

const NotFound = () => {

  useEffect(() => {
    const x = window.sessionStorage.getItem('token')
    console.log(x)
  },[])

  const {rdcr_auth} = useSelector((state) => state)

  console.log(rdcr_auth)

  return (
    <div className={Styles.error}></div>
  )
}

export default NotFound