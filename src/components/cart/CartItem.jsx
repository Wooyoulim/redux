import { useSelector, useDispatch } from 'react-redux';
import { allCart, removeCart } from '../../store/modules/cartSlice';
import { useState } from 'react';
import { useEffect } from 'react';
const CartItem = ({ cart }) => {
    const { id, title, price, description, image } = cart;
    const dispatch = useDispatch();
    const { amount, isChk } = useSelector((state) => state.cartR);
    const [cnt, setCnt] = useState(amount);
    const amountChange = (e) => {
        setCnt(e.target.value);
        price * Number(cnt);
    };

    return (
        <article>
            <input type="checkbox" className="isChk" checked={isChk} />
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <span> {description} </span>
            </div>
            <button onClick={() => dispatch(removeCart(id))}> Delete </button>
        </article>
    );
};

export default CartItem;
