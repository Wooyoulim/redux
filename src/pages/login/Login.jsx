import { LoginWrap } from './LoginStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../store/modules/authSlice';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        dispatch(login(user));
        navigate('/');
        setUser({
            email: '',
            password: '',
        });
    };
    return (
        <LoginWrap>
            <div className="inner">
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <p>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="abc@naver.com"
                            value={email}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="a1234"
                            name="password"
                            value={password}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <span>테스트 이메일: abc@naver.com </span>
                        <span>테스트 비밀번호 : a1234</span>
                    </p>
                    <p className="btn">
                        <button type="submit">Login</button>
                    </p>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;
