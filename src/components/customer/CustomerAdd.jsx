import { CustomerAddWrap } from './CustomerStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAdd, changeTitle, changeUser, signUpDate } from '../../store/modules/customerSlice';

const CustomerAdd = () => {
    const { title, user, date, customerData } = useSelector((state) => state.customerR);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !user) return;

        dispatch(onAdd(title));
        navigate('/customer');
        dispatch(changeTitle(''));
        dispatch(changeUser(''));
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
                            onChange={(e) => dispatch(changeTitle(e.target.value))}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="user"
                            name="user"
                            value={user}
                            onChange={(e) => dispatch(changeUser(e.target.value))}
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
