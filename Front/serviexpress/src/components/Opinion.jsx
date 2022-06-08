import star from '../assets/icons/star.png';
import style from '../pages/styles/opinion.module.scss';


export default function Opinion(){
    return <div>
                <div className={style.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>

    </div>



};