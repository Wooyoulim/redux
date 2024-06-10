import ProductSearch from '../../components/product/ProductSearch';
import { ProductWrap } from './ProductStyle';
import ProductList from '../../components/product/ProductList';

const Product = () => {
    return (
        <ProductWrap>
            <div className="inner">
                <h2>Product Protfolio</h2>

                <ProductSearch />
                <ProductList />
            </div>
        </ProductWrap>
    );
};

export default Product;
