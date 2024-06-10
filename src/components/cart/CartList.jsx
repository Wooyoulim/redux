import { useEffect } from 'react';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { CartListWrap } from './CartStyle';
import { useSelector, useDispatch } from 'react-redux';
import { allCart, resetCart, totalCart } from '../../store/modules/cartSlice';
const CartList = () => {
    const { carts, cartTotal } = useSelector((state) => state.cartR);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(totalCart());
    }, [carts]);

    const done = () => {
        alert('Check out is done');
        navigate('/');
        dispatch(resetCart());
    };

    return (
        <CartListWrap className="cart-wrap">
            <h2>My Show List</h2>
            <div className="cart-list">
                <input type="checkbox" className="allChk" onChange={() => dispatch(allCart())} />
                <label>All Check</label>
                {carts.map((cart) => (
                    <CartItem key={cart.id} cart={cart} />
                ))}
            </div>
            <div className="cart-bottom"></div>
            <p>
                <button onClick={() => navigate('/product')}>Continue show Product</button>
                <button onClick={() => dispatch(resetCart())}>Remove List</button>
                <button onClick={done}>Check out</button>
            </p>
        </CartListWrap>
    );
};

export default CartList;
