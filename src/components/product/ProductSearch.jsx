import { useState } from 'react';
import { ProductSearchWrap } from './ProductStyle';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, searchCart, sortCart } from '../../store/modules/cartSlice';
import { useEffect } from 'react';

const ProductSearch = () => {
    const [text, setText] = useState('');
    const textRef = useRef(null);
    const dispatch = useDispatch();

    const changeInput = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchCart(text));
        setText('');
        textRef.current.focus();
    };
    const onSort = (e) => {
        e.preventDefault();
        dispatch(sortCart(e.target.value));
    };

    useEffect(() => {
        dispatch(searchCart(''));
    }, []);
    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <select onChange={onSort}>
                        <option value=""> Arrange </option>
                        <option value="title">title</option>
                        <option value="category">Category</option>
                    </select>

                    <span onClick={() => dispatch(resetCart())}>Reset</span>
                </p>

                <p>
                    <input
                        type="text"
                        name="text"
                        value={text}
                        onChange={changeInput}
                        ref={textRef}
                    />
                    <button type="submit">Search</button>
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;
