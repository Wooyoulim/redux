import { VisualWrap } from './MainStyle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Main = () => {
    return (
        <>
            <VisualWrap>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="mainVisual">
                            <img src="./images/visual1.png" alt="" />
                            <div className="visualText">
                                <strong>What is architecture in simple words?</strong>
                                <p className="explain">
                                    Architecture is the art and technique of designing and building,
                                    as distinguished from the skills associated with construction.
                                </p>
                                <p className="explain">
                                    It is both the process and the product of sketching, conceiving,
                                    planning, designing, and constructing buildings or other
                                    structures.
                                </p>
                                <p className="explain">
                                    Architectural works, in the material form of buildings, are
                                    often perceived as cultural symbols and as works of art.
                                    Historical civilisations are often identified with their
                                    surviving architectural achievements.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mainVisual">
                            <img src="./images/visual2.png" alt="" />
                            <div className="visualText">
                                <strong>What is the concept of architecture?</strong>
                                <p className="explain">
                                    Modern architecture began after World War I as an avant-garde
                                    movement that sought to develop a completely new style
                                    appropriate for a new post-war social and economic order focused
                                    on meeting the needs of the middle and working classes.
                                </p>
                                <p className="explain">
                                    Emphasis was put on modern techniques, materials, and simplified
                                    geometric forms, paving the way for high-rise superstructures.
                                </p>
                                <p className="explain">
                                    Many architects became disillusioned with modernism which they
                                    perceived as ahistorical and anti-aesthetic, and postmodern and
                                    contemporary architecture developed.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mainVisual">
                            <img src="./images/visual3.png" alt="" />
                            <div className="visualText">
                                <strong>What is the main purpose of architecture?</strong>
                                <p className="explain">
                                    At its roots, architecture exists to create the physical
                                    environment in which people live, but architecture is more than
                                    just the built environment, its also a part of our culture.
                                </p>
                                <p className="explain">
                                    Thus, the main purpose of architecture is the erection of
                                    buildings and structures in which human life takes place.
                                    However, it is not to be limited to this. Architecture is more
                                    than just constructing a building to provide a home.
                                </p>
                                <p className="explain">
                                    The purpose of architecture varies depending on the use. In some
                                    sense it it utilitarian but it can also say a lot. It can also
                                    be used to signify a change in power, to be a symbol of the
                                    power of a diety or a government, to show how much money or
                                    culture a person has, to glorify a gods.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <div className="mainVisual">
                            <img src="./images/visual4.png" alt="" />
                            <strong>What is architecture in simple words?</strong>
                            <p className="explain">
                                Architecture is the art and technique of designing and building, as
                                distinguished from the skills associated with construction.
                            </p>
                            <p className="explain">
                                It is both the process and the product of sketching, conceiving,
                                planning, designing, and constructing buildings or other structures.
                            </p>
                            <p className="explain">
                                Architectural works, in the material form of buildings, are often
                                perceived as cultural symbols and as works of art. Historical
                                civilisations are often identified with their surviving
                                architectural achievements.
                            </p>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </VisualWrap>
        </>
    );
};

export default Main;
