import deleteImg from '../img/trashBin.svg';

function BasketItem(props) {
    const { id, name, price, quantity, removeFromBasket = Function.prototype, incQuantity = Function.prototype, decQuantity = Function.prototype, } = props;
    return (
        <div className="collection-cart-items">
            <div className="cart-item">
                <p className="cart-item-name">{name} <span className='changeValItem' onClick={() => decQuantity(id)}>-</span> x {quantity} <span className='changeValItem' onClick={() => incQuantity(id)}>+</span> = {price * quantity} V</p>
                <p className="price">{price} V</p>
            </div>
            <img className="clear-btn" onClick={() => removeFromBasket(id)} src={deleteImg} ></img>
        </div>
    );
}

export { BasketItem };