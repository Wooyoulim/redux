import styled from 'styled-components';

export const AboutWrap = styled.div`
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    background-image: url(./images/aboutBg.png);
    span {
        width: 100px;
        height: auto;
        background: rgba(0, 0, 0, 0.5);
    }
    /* filter: brightness(60%); */
    .inner {
        padding: 100px 0;
        position: relative;

        .ceo {
            img {
                position: absolute;
                width: 150px;
                border-radius: 50%;
                left: 50%;
                bottom: 5%;
                transform: translateX(-50%);
            }
        }
        .greeting {
            margin: 0 auto;
            background: rgba(0, 0, 0, 0.2);
            h2 {
                color: #004080;
                font-weight: bold;
            }
            strong {
                display: block;
                font-size: 24px;
                font-weight: bold;
                text-align: center;
            }
            p {
                margin: 20px 0;
                text-align: center;
            }
            padding: 50px;
            width: 1000px;
            height: 550px;
        }
    }
`;
