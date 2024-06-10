import { useDispatch, useSelector } from 'react-redux';
import { PaginationWrap } from './PaginationStyle';
import { useEffect } from 'react';
import { currentPage, lastPage, prevPage, totalData } from '../../store/modules/pagenationSlice';

const Pagination = () => {

    const { noticedata } = useSelector((state) => state.noticeR);
    const dispatch = useDispatch();
    const { currPage, totalPage } = useSelector((state) => state.pagenationR);


    useEffect(() => {
        dispatch(totalData());
    }, [noticedata]);

    console.log(totalPage);
    const arr = [...Array(totalPage)]; 
    console.log(arr);

    const selectPage = (idx) => {
        if (idx >= 1 && idx <= totalPage && idx !== currPage) {
            dispatch(currentPage(idx));
        }
    };

    return (
        <PaginationWrap>
            <div>
                <button onClick={() => dispatch(prevPage())}>{`<<`}</button>

                {arr.map((_, i) => (
                    <button
                        key={i}
                        className={currPage === i + 1 ? 'on' : ''}
                        onClick={() => selectPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}

                <button onClick={() => dispatch(lastPage())}>{`>>`}</button>
            </div>
        </PaginationWrap>
    );
};

export default Pagination;
