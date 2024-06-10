import { CustomerLIstWrap } from './CustomerStyle';
import CustomerItem from './CustomerItem';

const CustomerLIst = () => {
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
                    <CustomerItem />
                </tbody>
            </table>
            <p>
                <button>Writing</button>
            </p>
        </CustomerLIstWrap>
    );
};

export default CustomerLIst;
