import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './components/Layout';
import NotFiles from './pages/notfile/NotFiles';
import Main from './pages/main/Main';
import Join from './pages/login/Join';
import Login from './pages/login/Login';
import Logout from './pages/login/Logout';
import About from './pages/about/About';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Notice from './pages/notice/Notice';
import NoticeDetail from './components/notice/NoticeDetail';
import Customer from './pages/customer/Customer';
import CustomerAdd from './components/customer/CustomerAdd';

const App = () => {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />

                        <Route path="/notice">
                            <Route index element={<Notice />} />
                            <Route path=":noticeID" element={<NoticeDetail />} />
                        </Route>

                        <Route path="/customer">
                            <Route index element={<Customer />} />
                            <Route path="customeradd" element={<CustomerAdd />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<NotFiles />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
