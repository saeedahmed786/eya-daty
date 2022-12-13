import Image from 'next/image'
import React, { useState } from 'react'
import Doc from "../../assets/doc.jpg"
import Clinic from "../../assets/clinicimage1.png"
import Check from "../../assets/checkmark.svg"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import { Col, Row } from 'antd';
import { EnvironmentTwoTone, EyeTwoTone, HeartTwoTone, StarTwoTone } from '@ant-design/icons'

const SearchCard = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiperObj, setSwiperObj] = useState();
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className='SearchCard'>
            <Row gutter={[10, 10]}>
                <Col sm={7}>
                    <Swiper onSwiper={(swiper) => setSwiperObj(swiper)} pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <Image src={Doc} alt="Doctor" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Clinic} alt="Doctor" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Clinic} alt="Doctor" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Clinic} alt="Doctor" />
                        </SwiperSlide>
                    </Swiper>
                    <div className='thumbImages'>
                        <div>
                            <button onClick={() => swiperObj.slideTo(0)}>
                                <Image src={Doc} alt="Doctor" />
                            </button>
                            <button onClick={() => swiperObj.slideTo(1)}>
                                <Image src={Clinic} alt="Doctor" />
                            </button>
                            <button onClick={() => swiperObj.slideTo(2)}>
                                <Image src={Clinic} alt="Doctor" />
                            </button>
                            <button onClick={() => swiperObj.slideTo(3)}>
                                <Image src={Clinic} alt="Doctor" />
                            </button>
                        </div>
                    </div>
                </Col>
                <Col md={17} className='inner mt-4'>
                    <div className='nameAndPic flex items-center gap-2'>
                        <div className='profileImg'>
                            <Image src={Doc} alt="Doctor" width={32} height={32} className="rounded-[50%]" />
                        </div>
                        <div>
                            <div className='flex gap-2'>
                                <h6>Dr. Mechri Nasser</h6>
                                <Image src={Check} alt="Checkmark" />
                            </div>
                            <p className='mt-2'>Ophtalmologie</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-8 gap-1'>
                        <EnvironmentTwoTone />
                        <p className='normalPara'>Quartier des 400 logements,  à côté du marché couvert, Beni Slimane, Médea</p>
                    </div>
                    <div className='flex gap-2 mt-8 items-end'>
                        <button className='flex gap-1 items-center'>
                            <EyeTwoTone />
                            <span>55k</span>
                        </button>
                        <button className='flex gap-1 items-center'>
                            <HeartTwoTone />
                            <span>240</span>
                        </button>
                        <button className='flex gap-1 items-center'>
                            <StarTwoTone />
                            <span>4.8</span>
                        </button>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default SearchCard
