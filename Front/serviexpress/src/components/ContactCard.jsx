
import styles from '../pages/styles/ContactCard.module.scss';

export default function ContactCard({name,perfil}){

    return <div className={styles.container}>
          <div className={styles.userCenter}>
          <div className={styles.user}>
            <img src={perfil} alt="perfil"></img>
            <label>{name}</label>
          </div>
          </div>

          <label>Write a service that you looking for:</label>
          <input placeholder='I need a service like...'></input>

            <button>Add image</button>

          <label>Do you need this service urgently?</label>

          <div className={styles.btns}>
          <button>No, I dont</button>
          <button>Yes, it's Urgent!</button>
          </div>

    </div>


};