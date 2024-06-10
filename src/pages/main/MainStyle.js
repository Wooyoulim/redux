import styled from 'styled-components';

export const VisualWrap = styled.section`
    width: 100%;
    height: 1100px;
    position: relative;
    display: block;
    /* overflow: hidden; */
    .mainVisual {
        display: block;
        width: 100%;
        img {
            width: 100%;
            height: 800px;
        }
        .visualText {
            padding: 50px;
            height: auto;
            display: flex;
            justify-content: space-between;

            strong {
                font-size: 26px;
                font-weight: bold;
                display: block;
                width: 300px;
                word-break: keep-all;
                margin-right: 100px;
            }
            .explain {
                width: 400px;
                font-size: 18px;
                word-break: keep-all;
            }
        }
    }
`;

export const MainWrap = styled.div`
    &.main {
    }
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
    }
`;
