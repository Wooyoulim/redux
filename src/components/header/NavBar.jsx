import { Link } from 'react-router-dom';
import { NavWrap, TopMenu } from './HeaderStyle';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
    const { carts, cartTotal } = useSelector((state) => state.cartR);
    const { authed } = useSelector((state) => state.authR);
    return (
        <>
            <NavWrap className="nav">
                <ul>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/product'}>Product</Link>
                    </li>
                    <li>
                        <Link to={'/notice'}>Notice</Link>
                    </li>
                    <li>
                        <Link to={'/customer'}>Customer</Link>
                    </li>

                    <li>
                        <Link to="/cart">
                            Cart <span> {carts.length} </span>
                        </Link>
                    </li>
                </ul>
            </NavWrap>

            <TopMenu className="top-menu">
                <li>
                    <Link to={'/join'}>Join</Link>
                </li>
                {authed ? (
                    <li>
                        <Link to={'/logout'}>Logout</Link>
                    </li>
                ) : (
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                )}
            </TopMenu>
        </>
    );
};

export default NavBar;
