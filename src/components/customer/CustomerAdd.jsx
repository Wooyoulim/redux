import { CustomerAddWrap } from './CustomerStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAdd, changeInput, onUpdate } from '../../store/modules/customerSlice';

const CustomerAdd = () => {
    const { customerAdd } = useSelector((state) => state.customerR);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { title, name } = customerAdd;

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !name) return;

        dispatch(onAdd(customerAdd));
        dispatch(onUpdate(customerAdd));
        dispatch(changeInput(''));
        navigate('/customer');
        console.log(title);
        console.log(name);
    };

    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> Customer </h2>
                <form className="customer-add" onSubmit={onSubmit}>
                    <p>
                        <input
                            type="text"
                            placeholder="title"
                            name="title"
                            value={title}
                            onChange={(e) => dispatch(changeInput(e.target.value))}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="user"
                            name="name"
                            value={name}
                            onChange={(e) => dispatch(changeInput(e.target.value))}
                        />
                    </p>
                    <p>
                        <textarea cols="100" rows="10" placeholder="ask" name="content"></textarea>
                    </p>
                    <p>
                        <button type="submit">Save</button>
                        <button onClick={() => navigate('/customer')}>Cancel</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerAdd;
