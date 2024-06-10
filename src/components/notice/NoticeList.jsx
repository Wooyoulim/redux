import { NoticeListWrap } from './NoticeStyle';
import NoticeItem from './NoticeItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addData } from '../../store/modules/pagenationSlice';

const NoticeList = () => {
    const { noticedata } = useSelector((state) => state.noticeR);
    const dispatch = useDispatch();
    const { currPage, postPerPage } = useSelector((state) => state.pagenationR);

    const lastPost = currPage * 10;
    const firstPost = lastPost - postPerPage;

    const currentPost = noticedata.slice(firstPost, lastPost);

    useEffect(() => {
        dispatch(addData(noticedata));
    }, []);

    return (
        <NoticeListWrap>
            <table className="noticeTable">
                <caption>Notice</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Title</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPost.map((notice) => (
                        <NoticeItem key={notice.id} notice={notice} />
                    ))}
                </tbody>
            </table>
        </NoticeListWrap>
    );
};

export default NoticeList;
