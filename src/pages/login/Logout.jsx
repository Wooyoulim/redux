import { useDispatch } from 'react-redux';
import { LogoutWrap } from './LoginStyle';
import { logout } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const out = () => {
        dispatch(logout());
        navigate('/');
    };
    return (
        <LogoutWrap>
            <div className="inner">
                <>
                    <h2>
                        You have successfully logged out
                        <br /> of the application
                    </h2>
                    <h3>
                        <span>Thank you for using us </span>
                    </h3>

                    <p>
                        <button onClick={out}>Logout</button>
                    </p>
                </>
            </div>
        </LogoutWrap>
    );
};

export default Logout;
