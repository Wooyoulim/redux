import CustomerLIst from '../../components/customer/CustomerLIst';
import { CustomerWrap } from './CustomerStyle';

const Customer = () => {
    return (
        <CustomerWrap>
            <div className="inner">
                <h2> Customer </h2>
                <CustomerLIst />
            </div>
        </CustomerWrap>
    );
};

export default Customer;
