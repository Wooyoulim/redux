import { CustomerDetailWrap } from './CustomerStyle';

const CustomerDetail = () => {
    return (
        <CustomerDetailWrap>
            <div className="inner">
                <h2> 문의 글 </h2>
                <div className="con">
                    <h3>xx번 xxx</h3>

                    <p className="name"> xx </p>
                    <p className="txt"> xx </p>
                    <p className="date"> xx </p>
                </div>

                <p>
                    <button>목록으로</button>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                </p>
            </div>
        </CustomerDetailWrap>
    );
};

export default CustomerDetail;
