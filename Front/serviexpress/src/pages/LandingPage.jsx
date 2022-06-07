import React from 'react'
import Styles from './LandingPage.module.scss'

const LandingPage = () => {
  return (
    <div className={Styles.landingctn}>
     <h1 className={Styles.title}>ServiExpress</h1>
      <div className={Styles.descriptionctn}>
       <p className={Styles.description}>Find the services you are looking for. You get everything you need in one place.</p>
     </div>
     <h3 className={Styles.subtitle}>Popular professional services</h3>

      <div className={Styles.images}>
       <img src='https://media.istockphoto.com/photos/male-plumber-working-to-fix-leaking-sink-in-home-bathroom-picture-id1205228815?k=20&m=1205228815&s=612x612&w=0&h=dUnbdZnSyrpXCB8aUN-XezuZbnp3jncbJrrJKSidnsM=' alt='plumbing' className={Styles.img} />
       <img src='' />
       <img src='' />
     </div> 
    </div>
  )
}

export default LandingPage