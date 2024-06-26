import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { HeaderWrap } from './HeaderStyle';

const Header = () => {
    return (
        <HeaderWrap>
            <div className="inner">
                <h1>
                    <Link to={'/'}>
                        {/* <img src="./images/logo.svg" alt="" /> */}
                        <img src="./images/logo.png" alt="" />
                    </Link>
                </h1>
                <NavBar />
            </div>
        </HeaderWrap>
    );
};

export default Header;
