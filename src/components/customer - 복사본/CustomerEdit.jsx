import { CustomerAddWrap } from './CustomerStyle';

const CustomerEdit = () => {
    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의수정 </h2>
                <form className="customer-add">
                    <p>
                        <input type="text" placeholder="제목" name="title" />
                    </p>
                    <p>
                        <input type="text" placeholder="작성자" name="name" />
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
                        <button type="submit">저장하기</button>
                        <button>취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;
