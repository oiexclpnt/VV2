function GoodsItem(props) {
    const { id, name, description, price, full_background, addToBasket = Function.prototype, } = props;

    const defaultImage = 'https://i.postimg.cc/NLq03607/placeholder.png';

    const handleImageError = (event) => {
        event.target.src = defaultImage;
    };
    
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <div className="nft">
                    <img className="image-box" src={full_background} onError={handleImageError} alt={name}/>
                </div>
                <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
                {description ? <p>{description}</p> : <p>Описание отсутствует</p>}
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({id, name, price,})}>Купить</button>
                <span className="price">{price} V</span>
            </div>
        </div>
    );
}

export { GoodsItem };