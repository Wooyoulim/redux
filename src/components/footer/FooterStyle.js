import styled from 'styled-components';

export const FooterWrap = styled.footer`
    background-color: #333;
    .inner {
        width: 1520px;
        height: 250px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .footBar {
            font-size: 16px;
            color: #fff;
            img {
                margin: 40px 0;
                width: 200px;
            }
        }
        .footNav {
            display: flex;
            justify-content: end;
            li {
                font-size: 14px;
                font-weight: 400;
                margin-right: 20px;
                color: #fff;
                &:last-child {
                    margin-right: 0;
                }
                &::after {
                    content: '';
                    height: 10px;
                    width: 1px;
                    background-color: #fff;
                    display: inline-block;
                    margin-left: 20px;
                }
                &:last-child::after {
                    display: none;
                }
            }
        }
        .footIcon {
            margin-top: 100px;
            display: flex;
            justify-content: end;
            .icon {
                font-size: 25px;
                margin-right: 20px;
                color: #fff;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
`;
