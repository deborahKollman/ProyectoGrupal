import stylesCardSeller from '../pages/styles/stylesCardSeller.module.scss';
import star from '../assets/icons/star.png';

export default function CardSellerDetail(){
    return <div className={stylesCardSeller.containerCard}>
        <h3>About Seller</h3>
        <img src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="perfil"></img>
        <h2 className={stylesCardSeller.name}>Name</h2>
        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>


        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>

        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>

        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>

        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>


        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        <button>Contact</button>
    </div>


};