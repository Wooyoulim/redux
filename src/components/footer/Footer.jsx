import { FooterWrap } from './FooterStyle';
import { FaFacebook } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { SiNaver } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <div className="footBar">
                    <img src="./images/logo.png" alt="" />
                    <p>WooYuLim</p>
                    <p>Tel: 000 - 12 - 1072034</p>
                    <p>Copyright © Yulim Woo. All Rights Reserved </p>
                </div>
                <div>
                    <ul className="footNav">
                        <li>Products</li>
                        <li>Services</li>
                        <li>Our story</li>
                        <li>Support</li>
                        <li>Meia</li>
                        <li>Contact us</li>
                    </ul>
                    <div className="footIcon">
                        <FaFacebook className="icon on1" />
                        <PiInstagramLogoFill className="icon on2" />
                        <SiNaver className="icon on3" />
                        <FaYoutube className="icon on4" />
                    </div>
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;
