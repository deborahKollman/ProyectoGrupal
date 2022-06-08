
import style from '../pages/styles/profileOpinion.module.scss';
import star from '../assets/icons/star.png';
import starInactive from '../assets/icons/starInactive.png'


export default function ProfileOpinion(){
    return <div className={style.container}>
        <img className={style.profile} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="profile"></img>
        <div>
            <h3>JuanCarlos:</h3>
            <div className={style.divStars}>
               <div className={style.stars}>
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
                <img src={starInactive} alt="star"></img>
               </div>
               <label>4.0</label>
            </div>

        </div>
        <p>"Persona responsable"</p>

    </div>



};