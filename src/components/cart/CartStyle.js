import styled from 'styled-components';

export const CartListWrap = styled.div`
    .cart-list {
        width: 100%;
        input.allChk {
            width: 20px;
            height: 20px;
            margin-left: 10px;
            margin-bottom: 30px;
        }
        input.isChk {
            width: 20px;
            height: 20px;
        }
        label {
            vertical-align: super;
        }
        input[type='number'] {
            width: 100px;
            height: 20px;
            margin-left: 50px;
        }
        article {
            display: flex;
            border: 1px solid #000;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
            padding: 10px;
            font-size: 20px;
            width: 100%;
            img {
                width: 120px;
            }
            div {
                display: flex;
                width: 60%;
                h3 {
                    margin-right: 30px;
                }
            }
            button {
                width: 100px;
                border: 1px solid #000;
                height: 40px;
                transition: 0.3s;
                margin-top: 0;
                &:hover {
                    background: #fff;
                    color: #000;
                }
            }
        }
    }

    .cart-bottom {
        margin-top: 50px;
        display: flex;
        font-size: 18px;
        strong {
            margin-right: 20px;
        }
    }
    button {
        margin-top: 50px;
        width: 250px;
        height: 50px;
        background: #000;
        color: #fff;
        margin-right: 5px;
    }
`;
export const CartEmptyWrap = styled.div`
    .inner {
    }
    h2 {
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 500px;
    }
    p {
        text-align: center;
        button {
            margin-top: 50px;
            width: 300px;
            height: 50px;
            background: #000;
            color: #fff;
        }
    }
`;
