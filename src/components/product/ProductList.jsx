import { ProductListWrap } from './ProductStyle';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
const ProductList = () => {
    const { products } = useSelector((state) => state.cartR);
    return (
        <ProductListWrap className="cart-box">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ProductListWrap>
    );
};

export default ProductList;
