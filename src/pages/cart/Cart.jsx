import CartList from '../../components/cart/CartList';
import { CartWrap } from './CartStyle';
import CartEmpty from '../../components/cart/CartEmpty';
import { useSelector, useDispatch } from 'react-redux';
const Cart = () => {
    const { carts } = useSelector((state) => state.cartR);
    return (
        <CartWrap className="cart-box">
            <div className="inner">{carts.length > 0 ? <CartList /> : <CartEmpty />}</div>
        </CartWrap>
    );
};

export default Cart;
