import { NoticeDetailWrap } from './NoticeStyle';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NoticeDetail = () => {
    const { noticeID } = useParams();
    const { noticedata } = useSelector((state) => state.noticeR);

    const newItem = noticedata.find((notice) => notice.id === Number(noticeID));
    const { id, title, date, content } = newItem;
    const navigate = useNavigate();
    return (
        <NoticeDetailWrap>
            <div className="inner">
                <h2> Notice </h2>
                <div className="con">
                    <h3>
                        Index : {id} / {title}
                    </h3>
                    <p className="txt">{content} </p>
                    <p className="date">{date} </p>
                </div>
                <button onClick={() => navigate('/notice')}>Go to List</button>
            </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;
