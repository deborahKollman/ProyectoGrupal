




export default function FavoritesItem({image, title,description,price}) {
    return <div>
            <img src={image} alt="Im"></img>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
                <div>{price}</div>

            </div>
    </div>
    
}