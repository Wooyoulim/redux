import { JoinWrap } from './LoginStyle';

import Spinner from '../../components/Spinner';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const Join = () => {
    const dispatch = useDispatch();
    const [isSpinner, setIsSpinner] = useState(true);
    const [user, setUser] = useState({
        name: '',
        tel: '',
        email: '',
        password: '',
    });
    const { name, tel, email, password } = user;
    const textRef = useRef(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSpinner(false);
        }, 600);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const changeInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !tel) return;
        dispatch();
        textRef.current.focus();
    };
    return (
        <>
            {isSpinner && <Spinner />}
            <JoinWrap>
                <div className="inner">
                    <h2> Join Us </h2>
                    <form onSubmit={onSubmit}>
                        <p>
                            <label> Name </label>
                            <input
                                type="text"
                                placeholder="홍길동"
                                name="name"
                                value={name}
                                onChange={changeInput}
                                ref={textRef}
                            />
                        </p>
                        <p>
                            <label> Phone </label>
                            <input
                                type="tel"
                                name="tel"
                                placeholder="010-0000-0000"
                                value={tel}
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <label>Email </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="abc@naver.com"
                                value={email}
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <label>Password </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="a1234"
                                value={password}
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <button type="submit">Join</button>
                            <button>Cancel</button>
                        </p>
                    </form>
                </div>
            </JoinWrap>
        </>
    );
};

export default Join;
