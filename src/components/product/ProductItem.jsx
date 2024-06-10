import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../../store/modules/cartSlice';

const ProductItem = ({ product }) => {
    const { id, title, price, description, image } = product;
    const { carts } = useSelector((state) => state.cartR);
    const dispatch = useDispatch();

    return (
        <article>
            <div>
                <img src={image} alt={title} />
            </div>
            <h3> {title} </h3>
            <h4> {description}</h4>
            <p>
                {carts.find((item) => item.id === id) ? (
                    <button onClick={() => dispatch(removeCart(id))} className="off">
                        Remove Project
                    </button>
                ) : (
                    <button onClick={() => dispatch(addCart(product))}> add Project </button>
                )}
            </p>
        </article>
    );
};

export default ProductItem;
