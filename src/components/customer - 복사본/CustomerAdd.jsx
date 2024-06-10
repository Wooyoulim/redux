import { CustomerAddWrap } from './CustomerStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAdd, changeInput } from '../../store/modules/noticeSlice';

const CustomerAdd = () => {
    const { text } = useSelector((state) => state.customerR);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        dispatch(onAdd(text));
        dispatch(changeInput(''));
        navigate('/customer');
    };

    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> Customer </h2>
                <form className="customer-add" onSubmit={onSubmit}>
                    <p>
                        <input
                            type="text"
                            placeholder="제목"
                            name="title"
                            value={text}
                            onChange={(e) => dispatch(changeInput(e.target.value))}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="작성자"
                            name="name"
                            value={text}
                            onChange={(e) => dispatch(changeInput(e.target.value))}
                        />
                    </p>
                    <p>
                        <textarea
                            cols="100"
                            rows="10"
                            placeholder="문의하기"
                            name="content"
                        ></textarea>
                    </p>
                    <p>
                        <button>목록으로</button>
                        <button type="submit">Save</button>
                        <button>Cancel</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerAdd;
