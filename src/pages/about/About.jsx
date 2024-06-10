import { AboutWrap } from './AboutStyle';

const About = () => {
    return (
        <AboutWrap>
            <div className="inner">
                <span></span>
                <div className="ceo">
                    <img src="./images/aboutCeo.png" alt="" />
                </div>
                <div className="greeting">
                    <h2>
                        Global Leading Company with <br />
                        Core Competitiveness
                    </h2>
                    <strong>
                        Growing into a trustworthy and innovative global design group capable of
                        full package service of design, supervision, and implementation.
                    </strong>
                    <p>
                        AA Archigroup, which is starting anew, aims to become the No. 1 in the
                        domestic industry in terms of sales by 2027 and grow into a global design
                        company. To this end, based on the management philosophy of ‘trust’ and
                        ‘innovation’, we will create a new paradigm in architecture by establishing
                        an AA Chain of design-construction management (CM)/supervision-development
                        projects. First of all, by establishing a future strategy to build a growth
                        engine for 'Vision 2027', based on the best design capabilities, we will
                        expand the number of orders for residential and general facilities, while at
                        the same time strengthening the connection and trust with Hyundai Motor
                        Group, we will do our best to win orders for industrial facilities.
                    </p>
                </div>
            </div>
        </AboutWrap>
    );
};

export default About;
