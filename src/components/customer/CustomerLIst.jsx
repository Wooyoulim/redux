import { CustomerLIstWrap } from './CustomerStyle';
import CustomerItem from './CustomerItem';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CustomerLIst = () => {
    const { customerData } = useSelector((state) => state.customerR);
    const { authed } = useSelector((state) => state.authR);

    const navigate = useNavigate();

    const onWrite = () => {
        if (authed) {
            navigate('customeradd');
        } else {
            alert('Please login');
            navigate('/login');
        }
    };
    return (
        <CustomerLIstWrap>
            <table className="customerTable">
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="name" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Text</th>
                        <th>User</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {customerData.map((item) => (
                        <CustomerItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
            <p>
                <button onClick={onWrite}>Writing</button>
            </p>
        </CustomerLIstWrap>
    );
};

export default CustomerLIst;
