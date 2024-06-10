import { CartEmptyWrap } from './CartStyle';
import { useNavigate } from 'react-router-dom';
const CartEmpty = () => {
    const navigate = useNavigate();

    return (
        <CartEmptyWrap>
            <div>
                <h2> Your Show List is Empty</h2>
                <p>
                    <button onClick={() => navigate('/product')}> Return to Show Product </button>
                </p>
            </div>
        </CartEmptyWrap>
    );
};

export default CartEmpty;
