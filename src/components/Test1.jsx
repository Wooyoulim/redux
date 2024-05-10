import { useState } from 'react';

const Test1 = () => {
    const [color, setColor] = useState('skyblue');
    const chageColor1 = () => {
        if (color === 'skyblue') {
            setColor('pink');
        } else {
            setColor('skyblue');
        }
    };
    const chageColor2 = () => {
        setColor(color === 'skyblue' ? 'pink' : 'skyblue');
    };
    return (
        <div>
            <div
                style={{
                    width: 400,
                    height: 100,
                    border: '1px solid #000',
                    textAlign: 'center',
                    fontSize: 40,
                    lineHeight: '100px',
                    margin: '20px auto',
                    background: color,
                }}
            >
                컬러 : {color}
            </div>
            <h3>배경색</h3>
            <p>버튼을 누르면 배경색이 pink - skyblue</p>
            <p style={{ textAlign: 'center' }}>
                <button
                    onClick={() => {
                        chageColor1();
                    }}
                >
                    if문
                </button>
                <button onClick={chageColor2}>삼항연산자</button>
            </p>
        </div>
    );
};

export default Test1;
